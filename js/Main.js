define
(
    'Widget/js/Main',
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
                const container = document.createElement('div');
                const button = document.createElement('button');
                button.innerText = 'click me';
                button.innerText = 'click me2';
                const text = document.createElement('div');
                text.innerHTML = "The button has been clicked 0 times";

                button.addEventListener('click', () => {
                    count++;
                    text.innerHTML = `The buttton has been clicked ${count} times`;
                })

                console.info("Random number: " + Util.myFunction(10));
                console.info(TEST+5);
                console.info(PASSWORD+5);

                container.appendChild(button);
                container.appendChild(text);
                widget.body.innerHTML = '';
                widget.body.appendChild(container);
                const shoppingList = Vue.createApp({
                    data(){
                      return{
                        header: 'Shopping list app',
                        newItem: '',
                        newItemHighPriority: false,
                        editing: false,
                        items: [
                          {id: 1, label: "10 party hats", purchased: true, highPriority: false},
                          {id: 2, label: "2 board games", purchased: true, highPriority: true},
                          {id: 3, label: "20 cups", purchased: false, highPriority: true}
                      ]
                      }
                    },
                    computed:{
                      reversedItems(){
                        return [...this.items].reverse()
                      }
                    },
                    methods: {
                      saveItem(){
                       this.items.push({id: this.items.length + 1, label: this.newItem, highPriority: this.newItemHighPriority }); 
                       this.newItem=''
                      },
                      onEdit(editing){
                        this.editing = editing
                        this.newItem = ""
                      },
                      togglePurchased(item){
                        item.purchased = !item.purchased
                      }
                    }
                  }).mount('#shopping-list')
            },

            onResize: function() {
                console.info("onResize");
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