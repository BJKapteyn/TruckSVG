window.onload = function() {
        //target elements of contact gramag modal
        let modal = document.getElementById('contactModal');
        let background = document.getElementById('contactModalBackground');
        let closeWindowButton = document.getElementById('modalCloseButton');
        
        //target each suspension element inside each iframe
        let iframes = document.getElementsByTagName('iframe');
        
        let k703Suspension = iframes[0].contentWindow.document.getElementById('suspensionK703');
        let k703Part32 = iframes[0].contentWindow.document.getElementById('chairPart36k703');
        
        let k702Suspension = iframes[1].contentWindow.document.getElementById('suspensionK702');
        let k702Part31 = iframes[1].contentWindow.document.getElementById('chairPart31K702');
        
        let k701Suspension = iframes[2].contentWindow.document.getElementById('suspensionK701');
        

        k703Suspension.addEventListener('click', showModal);
        k703Part32.addEventListener('click', showModal);
        k702Suspension.addEventListener('click', showModal);
        k702Part31.addEventListener('click', showModal);
        k701Suspension.addEventListener('click', showModal);
        
        background.addEventListener('click', hideModal);
        closeWindowButton.addEventListener('click', hideModal);
        
        function showModal() {
            background.style.display = 'inline-block';
            modal.style.display = 'inline-block';
        }
        
        function hideModal() {
            background.style.display = 'none';
            modal.style.display = 'none';
        }
        
    }