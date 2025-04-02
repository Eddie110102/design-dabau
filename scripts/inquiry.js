const form = document.querySelector("#contact-form");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  // 檢查表單
  const form = document.forms["customer"];

  // 姓名
  const name = form["name"].value;
  const nameHint = form["name"].nextElementSibling;

  if (name == null || name == "") {
    nameHint.textContent = "請輸入姓名";
    form["name"].classList.add("error");
  } else {
    nameHint.textContent = "";
    form["name"].classList.remove("error");
  }

  // 手機
  const mobile = form["mobile"].value;
  const mobileHint = form["mobile"].nextElementSibling;
  const mobileRegex = /^09\d{8}$/;
  if (mobile == null || mobile == "") {
    mobileHint.textContent = "請輸入手機";
    form["mobile"].classList.add("error");
  } else if (!mobileRegex.exec(mobile)) {
    mobileHint.textContent = "請輸入正確手機格式";
    form["mobile"].classList.add("error");
  } else {
    mobileHint.textContent = "";
    form["mobile"].classList.remove("error");
  }

  // 室內電話
  const tel = form["tel"].value;
  const telHint = form["tel"].nextElementSibling;
  const telRegex = /^0\d{1,3}-?\d{6,8}$/;
  if (!telRegex.exec(tel)) {
    telHint.textContent = "請輸入正確格式";
    form["tel"].classList.add("error");
  } else {
    telHint.textContent = "";
    form["tel"].classList.remove("error");
  }

  // 信箱
  const email = form["email"].value;
  const emailHint = form["email"].nextElementSibling;
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  if (email == null || email == "") {
    emailHint.textContent = "請輸入電子信箱";
    form["email"].classList.add("error");
  } else if (!emailRegex.exec(email)) {
    emailHint.textContent = "請輸入正確格式";
    form["email"].classList.add("error");
  } else {
    emailHint.textContent = "";
    form["email"].classList.remove("error");
  }

  // 區域
  const city = form["city"].value;
  const area = form["area"].value;
  const cityAreaHint = form["city"].parentElement.nextElementSibling;
  if (city == "default") {
    cityAreaHint.textContent = "請選擇建築所在縣市";
    form["city"].classList.add("error");
    form["area"].classList.add("error");
  } else if ((city !== "default" && area == null) || area == "") {
    cityAreaHint.textContent = "請選擇建築所在區域";
    form["city"].classList.remove("error");
    form["area"].classList.add("error");
  } else {
    cityAreaHint.textContent = "";
    form["city"].classList.remove("error");
    form["area"].classList.remove("error");
  }

  // 性質
  const type = form["type"].value;
  const typeHint = form["type"].nextElementSibling;
  if (type == "default") {
    typeHint.textContent = "請選擇建築性質";
    form["type"].classList.add("error");
  } else {
    typeHint.textContent = "";
    form["type"].classList.remove("error");
  }

  // 建物種類
  const category = form["category"].value;
  const categoryHint = form["category"].nextElementSibling;
  if (category == "default") {
    categoryHint.textContent = "請選擇物件種類";
    form["category"].classList.add("error");
  } else {
    categoryHint.textContent = "";
    form["category"].classList.remove("error");
  }

  // 室內格局
  // const bedroom = form["bedroom"].value;
  // const publicSpace = form["public-space"].value;
  // const bathroom = form["bathroom"].value;
  // const roomHint = form["bedroom"].parentElement.nextElementSibling;
  // if (bedroom == "default") {
  //   form["bedroom"].classList.add("error");
  //   roomHint.textContent = "請書選擇室內格局";
  // } else {
  //   form["bedroom"].classList.remove("error");
  //   roomHint.textContent = "";
  // }
  // if (publicSpace == "default") {
  //   form["public-space"].classList.add("error");
  //   roomHint.textContent = "請書選擇室內格局";
  // } else {
  //   form["public-space"].classList.remove("error");
  //   roomHint.textContent = "";
  // }
  // if (bathroom == "default") {
  //   form["bathroom"].classList.add("error");
  //   roomHint.textContent = "請書選擇室內格局";
  // } else {
  //   form["bathroom"].classList.remove("error");
  //   roomHint.textContent = "";
  // }

  // 坪數
  // const square = form["square"].value;
  // const squareHint = form["square"].nextElementSibling;
  // if (square == null || square == "") {
  //   squareHint.textContent = "請填寫室內坪數";
  //   form["square"].classList.add("error");
  // } else if (square < 1) {
  //   squareHint.textContent = "請填寫正確坪數";
  //   form["square"].classList.add("error");
  // } else {
  //   squareHint.textContent = "";
  //   form["square"].classList.remove("error");
  // }

  // 樓層
  // const floor = form["floor"].value;
  // const underground = form["underground"].value;
  // const floorHint = form["floor"].parentElement.nextElementSibling;
  // if (floor == null || floor == "") {
  //   floorHint.textContent = "請填寫樓層";
  //   form["floor"].classList.add("error");
  // } else if (isNaN(floor) || floor < 1) {
  //   floorHint.textContent = "請輸入正整數";
  //   form["floor"].classList.add("error");
  // } else {
  //   floorHint.textContent = "";
  //   form["floor"].classList.remove("error");
  // }

  // if (underground == null || underground == "") {
  //   if (floorHint.textContent.length > 0) {
  //     floorHint.textContent = `${floorHint.textContent}及地上/地下`;
  //   } else {
  //     floorHint.textContent = "請選擇位置";
  //   }
  // }

  // 搬運需求
  const elevator = form["elevator"].value;
  const elevatorHint =
    form["elevator"][0].parentElement.parentElement.nextElementSibling;
  if (elevator == null || elevator == "") {
    elevatorHint.textContent = "請選擇是否有電梯設備";
  } else {
    elevatorHint.textContent = "";
  }

  // 服務項目
  const service = form["service"];
  const serviceHint =
    form["service"][0].parentElement.parentElement.nextElementSibling;
  for (let n = 0; n < service.length; n++) {
    if (service[n].checked) {
      serviceHint.textContent = "";
      break;
    } else {
      serviceHint.textContent = "請至少選擇一項服務";
    }
  }

  // 開工日
  const start = form["start"].value;
  const startHint = form["start"].nextElementSibling;
  if (start == null || start == "") {
    startHint.textContent = "請選擇日期";
    form["start"].classList.add("error");
  } else {
    startHint.textContent = "";
    form["start"].classList.remove("error");
  }

  // 完工日
  const end = form["end"].value;
  const endHint = form["end"].nextElementSibling;
  if (end == null || end == "") {
    endHint.textContent = "請選擇日期";
    form["end"].classList.add("error");
  } else {
    endHint.textContent = "";
    form["end"].classList.remove("error");
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

// 預設月曆最小範圍
const start = document.querySelector("#start");
const end = document.querySelector("#end");

const now = `${new Date().getFullYear()}-${
  new Date().getMonth() + 1 > 9
    ? new Date().getMonth() + 1
    : `0${new Date().getMonth() + 1}`
}-${
  new Date().getDate() > 9 ? new Date().getDate() : `0${new Date().getDate()}`
}`;

start.setAttribute("min", now);
end.setAttribute("min", now);
