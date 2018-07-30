/* All tests are placed within the $() function
 * since some of the tests require DOM elements. This
 * ensures they don't run until the DOM is ready.
 */
$(function() {
    /* Test suite for RSS Feed
     */
    describe('RSS Feeds', function() {
         /* Test to ensure the allFeeds variable has been defined
         * and that it is not empty.
         */ 
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });
         /* Test to loop through each feed in the allFeeds
          * object to ensure they have a URL defined
          * and that the URL is not empty.
          */
        it('have a URL defined', function() {
            for(let feed of allFeeds) {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            };
        });
        /* Test to loop through each feed in the allFeeds
         * object to ensure they have a name defined
         * and that the name is not empty.
         */
        it('have a name defined', function() {
            for (let feed of allFeeds) {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            };
        });
    });

    /* Test suite for tests related to the menu
     */
    describe('The menu', function() {
        const body = document.querySelector('body'),
            menu = document.querySelector('.menu-icon-link');
        /* This test ensures the menu element is hidden
         * by default. This is tested by making sure 
         * the menu-hidden class is contained in the
         * body classList.
         */
        it('should be hidden by default', function() {
            expect(body.classList).toContain('menu-hidden');
        });
        /* This test ensures the menu changes
         * visibility when the menu icon is clicked.
         * It contains two expectations.
         */
        it('should change visibility when the menu icon is clicked', function() {
            /* On the first click of the menu icon, 
             * the menu-hidden class should be removed 
             * from body to reveal the menu.
             */
            menu.click();
            expect(body.classList).not.toContain('menu-hidden');
            /* On the second click of the menu icon,
             * the menu-hidden class should be added to body
             * to hide the menu.
             */
            menu.click();
            expect(body.classList).toContain('menu-hidden');
        });
    });
    
    /* Test suite to make sure there is at least
     * a single .entry element within the .feed
     * container.
    */
    describe('Initial Entries', function() {
        /* Jasmine's beforeEach and done functions are
         * needed to test the asynchronous loadFeed() function.
         */
        beforeEach(function(done) {
            loadFeed(0, done);
        });
        /* Make sure the feed container's children
         * property has a length greater than 0
         * to verify there are entries present.
         */
        it('has at least one entry within the feed container', function() {
            const feedEntries = document.querySelectorAll('.feed .entry');
            expect(feedEntries.length > 0).toBe(true);
        });
    });
    /* Test suite to ensure that when a new feed is loaded 
     * by the loadFeed function, the content actually changes.
     */ 
    describe('New Feed Selection', function() {
        const feed = document.querySelector('.feed'); // grabs the feed
 
            
        /* Jasmine's beforeEach and done functions are
         * needed to test the asynchronous loadFeed() function.
         */
        beforeEach(function(done) {
            /* Load first feed
            */
            loadFeed(0, function() {
                /* First feed done loading, 
                 * store contents of first feed
                 */
                firstFeed = feed.innerText;
                /* Load second feed
                */
                loadFeed(1, function() {
                    /* Second feed done loading, 
                     * store contents of second feed
                     */
                    secondFeed = feed.innerText;
                    /* Variables initialized, call done() and begin testing
                    */
                   done();
                });
            });

        });
        it('has content that changes', function() {
            /* Test contents from the first feed against 
             * those from the second feed
             * to make sure they're different
             */
            expect(firstFeed).not.toBe(secondFeed);
            });
    });
});
