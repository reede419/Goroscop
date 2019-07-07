
	
	class FormChecker {
  constructor(sSelector){
    this.form = $(sSelector);
    this.textfields = this.form.find(".b-textfield");
    this.errorMessage = this.form.find(".b-form__message_error");
  
  this.form.submit (this.checkTextfield(event));
  this.textfields.blur(this.checkTextfield.bind(this));

  }
checkTextfield(event){
	event.preventDefault();
	
	let isFormError = false;
	this.textfields.each((i, textfield)=>{
	   let currentTextField = $(textfield);
	   checkTextfield(null, currentTextField);
	});
}


  checkTextfield(event, textfield = {}) {
    //console.log("errorMessage");
    let currentTextfield = textfield.length ? textfield : $(event.currentTarget),
        currentTextfieldVal = currentTextfield.val(),
        regexlist = {
          "email"       : "^.+$"
          "name"        : "^[A-Za-zA-пр-џ\\-\\.,\s]{1,10}$",
          "data"       : "^[0-9]{1,5}(\\.[0-9]{1,2})?$",
          "number"       : "^[0-9]{1,5}(\\.[0-9]{1,2})?$"
          
        },
        currentTextfieldName = currentTextfield.attr("name"),
        currentRegExp        = regexlist[currentTextfieldName],
        isTextfieldError       = ! currentRegExp.test(currentTextfieldVal);
        
		console.log(textfieldError);


    currentTextfieldName.toggleClass("b-textfield_error", isTextfieldError)
  }
}
	
	
	
	
	
	
	