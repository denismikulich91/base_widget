define
(
    'js/Main',
    [
        // 3DEXPERIENCE Cloud Platform JS modules 
        'DS/PlatformAPI/PlatformAPI',

        // Custom modules
        'Modules/Util'
    ],
    function
    (
        PlatformAPI,
        Util
    )
    {

        // Declare public functions or variables here. Accessible by other modules. Call it by "Main.<function>". Usage sample, e.g. Main.onLoad() 
        var exports = {
            onLoad: function() {
                const TEST = prompt('Give test value test:');
                const PASSWORD = prompt('Enter password test:');
                console.info("Global var widget", widget);

                console.log("Widget is running nowhere!");
                let count = 0;
                let count2 = 0;
                const container = document.createElement('div');
                const button = document.createElement('button');
                button.innerText = 'click me';
                const text = document.createElement('div');
                const container2 = document.createElement('div');
                const button2 = document.createElement('button');
                button2.innerText = 'click me2';
                const text2 = document.createElement('div');
                text2.innerHTML = "The button2 has been clicked 0 times";

                button.addEventListener('click', () => {
                    count++;
                    text.innerHTML = `The buttton1 has been clicked ${count} times`;
                })
                button2.addEventListener('click', () => {
                    count2++;
                    text2.innerHTML = `The buttton2 has been clicked ${count2} times`;
                })

                console.info(TEST+5);
                console.info(PASSWORD+5);

                container.appendChild(button);
                container.appendChild(text);
                widget.body.innerHTML = '';
                widget.body.appendChild(container);
                container2.appendChild(button2);
                container2.appendChild(text2);
                widget.body.innerHTML = '';
                widget.body.appendChild(container2);
            },

            onResize: function() {
                console.info("Has been resized by DMH5");
            },

            onViewChange: function() {
                console.info("onViewChange");
            },

            onEdit: function() {
                console.info("onEdit");
            },

            onRefresh: function() {
                console.info("onRefresh");
            },

            endEdit: function() {
                console.info("endEdit");
            }
        };

        return exports;
    }
);