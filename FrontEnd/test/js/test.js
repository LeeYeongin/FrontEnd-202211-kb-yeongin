const formsubmit = () => {
    const title = document.getElementById("title").value;
    const writer = document.getElementById("writer").value;
    const emailId = document.getElementById("emailId").value;
    const contents = document.getElementById("contents").value;

    // === : 값, type 모두 비교
    // title === '' || title === null || title === undefined
    if (!title || !writer || !emailId || !contents) {
        alert("모두 입력하세요.");
        return;
    }

    const form = document.getElementById("input-form");
    form.action = "https://naver.com";
    form.method = "GET";
    form.submit();

    // alert('Submit!');
};