var counties=['Avon',
  'Bedfordshire',
  'Berkshire',
  'Buckinghamshire',
  'Cambridgeshire',
  'Cheshire',
  'Cleveland',
  'Cornwall',
  'Cumbria',
  'Derbyshire',
  'Devon',
  'Dorset',
  'Durham',
  'East Sussex',
  'Essex',
  'Gloucestershire',
  'Hampshire',
  'Herefordshire',
  'Hertfordshire',
  'Isle of Wight',
  'Kent',
  'Lancashire',
  'Leicestershire',
  'Lincolnshire',
  'London',
  'Merseyside',
  'Middlesex',
  'Norfolk',
  'Northamptonshire',
  'Northumberland',
  'North Humberside',
  'North Yorkshire',
  'Nottinghamshire',
  'Oxfordshire',
  'Rutland',
  'Shropshire',
  'Somerset',
  'South Humberside',
  'South Yorkshire',
  'Staffordshire',
  'Suffolk',
  'Surrey',
  'Tyne and Wear',
  'Warwickshire',
  'West Midlands',
  'West Sussex',
  'West Yorkshire',
  'Wiltshire',
  'Worcestershire'];

var services=['threading','waxing','facial','manicure','pedicure','blowdry','party make up',
  'extenso','face polish'];


function autocomplete(inp,arr){
     inp.addEventListener("input",function(e){
                                                var a, b, i, val = this.value;
                                                closeAllLists();
                                                if (!val) { return false;}


                                                a = document.createElement("DIV");
                                                a.setAttribute("id", this.id + "autocomplete-list");
                                                a.setAttribute("class", "autocomplete-items");
                                                this.parentNode.appendChild(a);


                                                for (i = 0; i < arr.length; i++) {
                                                        if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {

                                                               b = document.createElement("DIV");
                                                               b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
                                                               b.innerHTML += arr[i].substr(val.length);
                                                               b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
                                                               b.addEventListener("click", function(e) {

                                                                                                         inp.value = this.getElementsByTagName('input')[0].value;

                                                                                                         closeAllLists();
                                                                                                        });
                                                               a.appendChild(b);
                                                        }
                                                }


                                                });

     function closeAllLists(elmnt) {
          var x = document.getElementsByClassName("autocomplete-items");
          for (var i = 0; i < x.length; i++) {
            if (elmnt != x[i] && elmnt != inp) {
              x[i].parentNode.removeChild(x[i]);
            }
          }
        }

     document.addEventListener("click", function (e) {
                                                      closeAllLists(e.target);
                                                  });
                                }
autocomplete(document.getElementById("services"), services);
autocomplete(document.getElementById("location"), counties);



