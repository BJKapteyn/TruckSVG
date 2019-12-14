window.onload = function() {
    //target elements of contact gramag modal
    let modal = document.getElementById('contactModal');
    let modalContent = document.getElementById('contactModalContent');
    let background = document.getElementById('contactModalBackground');
    let closeWindowButton = document.getElementById('modalCloseButton');
    
    //target each suspension element inside each iframe
    let iframes = document.getElementsByTagName('iframe');
    //kenworth
    let k703Suspension = iframes[0].contentWindow.document.getElementById('suspensionK703');
    let k703Part36 = iframes[0].contentWindow.document.getElementById('chairPart36K703');
    let k702Suspension = iframes[1].contentWindow.document.getElementById('suspensionK702');
    let k702Part31 = iframes[1].contentWindow.document.getElementById('chairPart31K702');
    let k701Suspension = iframes[2].contentWindow.document.getElementById('suspensionK701');
    let k701Part32 = iframes[2].contentWindow.document.getElementById('chairPart32K701');
    //peterbuilt
    let p703Suspension = iframes[0].contentWindow.document.getElementById('suspensionP703');
    let p703Part36 = iframes[0].contentWindow.document.getElementById('chairPart36P703');
    let p702Suspension = iframes[1].contentWindow.document.getElementById('suspensionP702');
    let p702Part29 = iframes[1].contentWindow.document.getElementById('chairPart29P702');
    let p701Suspension = iframes[2].contentWindow.document.getElementById('suspensionP701');
    let p701Part32 = iframes[2].contentWindow.document.getElementById('chairPart30P701');
    
    let suspensionHTML = '<a href="https://gramag.com/contact-us/">Contact Gramag</a> for all other suspension issues. <a href="tel:740-490-1036">1-740-490-1036</a>';
    let nonSuspensionHTML = '<a href="https://gramag.com/contact-us/">Contact Gramag</a><br /> Phone: <a href="tel:740-490-1036">1-740-490-1036</a>'
   
    //Check if there is Kenworth or Peterbuilt elements
    if(k703Suspension != null) {
        k703Suspension.addEventListener('click', showSuspensionModal);
        k702Suspension.addEventListener('click', showSuspensionModal);
        k701Suspension.addEventListener('click', showSuspensionModal);
        k703Part36.addEventListener('click', showNonSuspensionModal);
        k702Part31.addEventListener('click', showNonSuspensionModal);
        k701Part32.addEventListener('click', showNonSuspensionModal);
    }
        
    
    if(p703Suspension != null) {
        p703Suspension.addEventListener('click', showSuspensionModal);
        p702Suspension.addEventListener('click', showSuspensionModal);
        p701Suspension.addEventListener('click', showSuspensionModal);
        p703Part36.addEventListener('click', showNonSuspensionModal);
        p702Part29.addEventListener('click', showNonSuspensionModal);
        p701Part32.addEventListener('click', showNonSuspensionModal);
    }
    
    background.addEventListener('click', hideModal);
    closeWindowButton.addEventListener('click', hideModal);
    
    function showModal() {
        background.style.display = 'inline-block';
        modal.style.display = 'inline-block';
    }
    
    function showSuspensionModal() {
        modalContent.innerHTML = suspensionHTML;
        showModal();
    }
    
    function showNonSuspensionModal() {
        modalContent.innerHTML = nonSuspensionHTML;
        showModal();
    }
    
    function hideModal() {
        background.style.display = 'none';
        modal.style.display = 'none';
    }
   
}