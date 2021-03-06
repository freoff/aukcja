const $ = require('jquery');
import * as id from 'shortid';
let fileList =[];
$(document).ready(() => {
  console.clear();
  $('form').submit(e=>{
    $('#input-plik').remove();//pliki przeslane przez api
    return true;
  });

});
$('#input-plik').on('change', e => {
  for (let file of e.target.files) {
    file.id = id.generate();
    console.log(file);
    fileList.push(file);
    
    extractFileImage(file);
    sendFile(file);
    console.log(fileList);
  }

});

function sendFile(file) {
  let nowaAukcjaId = $('[name="aukcjaId"]').val();
  let formData = new FormData();
  formData.append('plik', file, file.name);
  formData.append('plikId',file.id);
  formData.append('aukcjaId', nowaAukcjaId);
  $.ajax({
    url:'/api/obrazek/nowaAukcja/' + nowaAukcjaId,
    method:'put',
    data:formData,
    contentType:false,
    processData:false,
    
    success:function(data, textStatus, jqXHR){
      console.log(data);
    },
    error:function(jqXHR, textStatus, errorThrown){
      console.log(jqXHR);
    }

  });
};

function extractFileImage(file) {

  let fileReader = new FileReader();
  fileReader.addEventListener('load', e => {
    if (fileReader.readyState === fileReader.DONE) {
      $(
        `
          <div class="col-md-3 align-middle" id="thumb-${file.id}" >
            <img class="img-thumbnail " width="100%" src="${fileReader.result}" id="${file.id}"/>
            <div class='text-center mt-1'>
              <button type='button' class='align-middle btn-error'
              onclick="$('#thumb-${file.id}').remove()">
              <span class='fa fa-close text-warning'></span>
              
              </button>

            </div>
          </div>
          
          `

      ).appendTo($('#plik-Placeholder'));
      
    }
  });
  fileReader.readAsDataURL(file);

}
