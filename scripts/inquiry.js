const form = document.querySelector("#contact-form");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  // 檢查表單
  const form = document.forms["customer"];

  // 姓名
  const name = form["name"].value;
  const nameHint = document.querySelector("#name-hint");
  if (name == null || name == "") {
    nameHint.textContent = "請輸入姓名";
  } else {
    nameHint.textContent = "";
  }
  console.log("name", name);

  // 手機
  const mobile = form["mobile"].value;
  const mobileHint = document.querySelector("#mobile-hint");
  const mobileRegex = /^09\d{8}$/;
  if (mobile == null || mobile == "") {
    mobileHint.textContent = "請輸入手機";
  } else if (!mobileRegex.exec(mobile)) {
    mobileHint.textContent = "請輸入正確手機格式";
  } else {
    mobileHint.textContent = "";
  }

  // 室內電話
  const tel = form["tel"].value;
  const telHint = document.querySelector("#tel-hint");
  const telRegex = /^0\d{1,3}-?\d{6,8}$/;
  if (!telRegex.exec(tel)) {
    telHint.textContent = "請輸入正確格式";
  } else {
    telHint.textContent = "";
  }

  // 信箱
  const email = form["email"].value;
  const emailHint = document.querySelector("#email-hint");
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  if (email == null || email == "") {
    emailHint.textContent = "請輸入電子信箱";
  } else if (!emailRegex.exec(email)) {
    emailHint.textContent = "請輸入正確格式";
  } else {
    emailHint.textContent = "";
  }

  // these IDs from the previous steps
  // emailjs.sendForm("service_key", "template_key", this).then(
  //   () => {
  //     console.log("SUCCESS!");
  //   },
  //   (error) => {
  //     console.log("FAILED...", error);
  //   }
  // );
});
