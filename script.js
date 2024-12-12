document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // منع الإرسال الافتراضي للنموذج
    const name = document.getElementById('name').value;
    const email = document.getElementById('place').value;
    const message = document.getElementById('date').value;
    // عرض رسالة تأكيد
    const responseMessage = ` thank you ${name} your massage has been received, we will respond to you soon as possible `;
    document.getElementById('responseMessage').innerText = responseMessage;
    document.getElementById('contactForm').reset(); // إعادة تعيين النموذج
});