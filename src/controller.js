
// create new constructor called Controller
(function exportController() {
    class Controller {
      constructor() {
         this.initialiseSea();
        }
          // create new method called initialiseSea
         initialiseSea() {
         const backgrounds = [
            './images/water0.png',
            './images/water1.png',
          ];
           let backgroundIndex = 0;
            window.setInterval(() => { 
            document.querySelector('#viewport').style.backgroundImage = `url('${backgrounds[backgroundIndex % backgrounds.length]}')`;
            backgroundIndex += 1;
          }, 1000);
        };

            renderPorts(ports) {
             const portsElement = document.querySelector('#ports');
              portsElement.style.width = '0px';

                ports.forEach((port, index) => {
                const newPortElement = document.createElement('div');
                newPortElement.className = 'port';
                
                newPortElement.dataset.portName = port.name
                newPortElement.dataset.portIndex = index

                portsElement.appendChild(newPortElement);

                const portsElementWidth = parseInt(portsElement.style.width, 10);
                portsElement.style.width = `${portsElementWidth + 256}px`;
              });
              };
            };

    if (typeof module !== 'undefined' && module.exports) {
       module.exports = Controller;
       } else {
      window.Controller = Controller;
       }
     }());          

        // window interface represents a window containing a DOM document
        // setInterval method repeatedly calls a function with a fixed time delay
        // running callback function every 1000 milliseconds.
        // document.querySelector finds #viewport (see style.css) 
        // element and changes background image to alternater between watewr0 and water1
        // querySelector() method returns the first element that matches a CSS selector
        // backgroundImage property sets or returns the background image of an element