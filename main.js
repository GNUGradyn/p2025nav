window.onload = () => {
    const target = document.getElementsByTagName("h4")[0];
    if (target.scrollHeight > target.clientHeight) {
        alert("test")
    }
}