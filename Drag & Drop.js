"use strict"

let lists = document.getElementsByClassName('list'),
            rigthBox = document.getElementById('right'),
            leftBox = document.getElementById('left');

        for(let list of lists){
            list.addEventListener('dragstart',function(evt){
                let select = evt.target;
                rigthBox.addEventListener('dragover',function (evt){
                    evt.preventDefault();
                });
    
                rigthBox.addEventListener('drop',function(evt){
                    rigthBox.appendChild(select);
                    select = null;
                });
                
                leftBox.addEventListener('dragover',function (evt){
                    evt.preventDefault();
                });
    
                leftBox.addEventListener('drop',function(evt){
                    leftBox.appendChild(select);
                    select = null;
                }); 
            });
            debugger
        }