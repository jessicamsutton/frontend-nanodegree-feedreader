$(function() {
    describe('RSS Feeds', function() {
        /* Tests that the allFeeds array has been defined */
        it('have been defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* Tests that each item in the allFeeds array
         * has a defined URL
         */
        it('have a defined URL', function() {
            for (let feed of allFeeds) {
              expect(feed.url).toBeDefined();
            }
          });

        /* Tests that each item in the allFeeds array
         * has a defined name
         */
        it('have a defined name', function() {
            for (let feed of allFeeds) {
              expect(feed.name).toBeDefined();
            }
        });
    });

    describe('The menu', function() {
        /* Tests that the menu element is hidden by default */
        it('is hidden by default', function() {
            const body = document.querySelector('body');
            expect(body).toHaveClass('menu-hidden');
        });

        /* Tests that whenever the menu icon is clicked
         * the .menu-hidden class is toggled
         */
        it('changes visibility when the menu icon is clicked', function() {
            const body = document.querySelector('body');
            const menu = document.querySelector('.menu-icon-link');

            menu.click();
            expect(body).not.toHaveClass('menu-hidden');

            menu.click();
            expect(body).toHaveClass('menu-hidden');
        });

    });

    describe('Initial Entries', function() {
        /* Tests that, at a minimum, the loadFeed function
         * produces a single .entry element in the .feed container.
         */
         beforeEach(function(done) {
           loadFeed(0, function() {
             done();
           });
         });

        it('have a single .entry element within the .feed container', function() {
            const feed = document.querySelector('.feed');
            expect(feed.innerHTML).toContain('entry');
        });
    });

    describe('New Feed Selection', function () {
        /* Tests that the loadFeed() function displays
         * new content upon being called.
         */
        let first, second;
        beforeEach(function(done) {
            loadFeed(0, function() {
                first = document.querySelector('.feed').innerHTML;
                loadFeed(1, function() {
                    second = document.querySelector('.feed').innerHTML;
                    done();
                });
            });
        });

        it('displays new content', function() {
            expect(first).not.toEqual(second);
        });
    });
}());
