console.log('main.js loaded')
function handleReplyButton(responseId) {
    const replyFormContainer = document.getElementById(`reply-form-container-${responseId}`);
    if (replyFormContainer) {
      replyFormContainer.className = 'reply-form-container enabled'
    }
  }
  
  function handleCancelReply(responseId) {
    const replyFormContainer = document.getElementById(`reply-form-container-${responseId}`);
    if (replyFormContainer) {
      replyFormContainer.className = 'reply-form-container'
    }
    
    }

    // function handleDeleteReply(responseId){
    //   const replyFormContainer = document.getElementById(`reply-form-container-${responseId}`)
    //   if (replyFormContainer){
    //     replyFormContainer.className = 'reply-form-container'
    //   }
    // }
  


  
// document.querySelector('.reply-button').addEventListener('click', handleReplyButton)