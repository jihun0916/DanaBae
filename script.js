const container = document.getElementById("container");
const turntable = document.getElementById("turntable");

// 이미지 파일명의 접두사와 접미사를 설정합니다.
const prefix = "path/to/turntable-frame- ";
const suffix = ".png";

// 이미지 개수를 설정합니다.
const numImages = 200;

// 이미지의 현재 인덱스를 나타내는 변수를 초기화합니다.
let currentImageIndex = 0;

// container 요소의 가로 크기를 가져옵니다.
const containerWidth = container.offsetWidth;

// 마우스의 X 위치에 따라 이미지를 변경하는 함수입니다.
function changeImage(event) {
  // 마우스 위치를 0에서 1 사이의 비율로 변환합니다.
  const mouseX = event.clientX;
  const percentX = mouseX / containerWidth;

  // 새로운 이미지 인덱스를 계산합니다.
  const newImageIndex = Math.floor(percentX * numImages);

  // 새로운 이미지를 설정합니다.
  if (newImageIndex !== currentImageIndex) {
    currentImageIndex = newImageIndex;
    turntable.src = prefix + "(" +currentImageIndex +")"+ suffix;
  }
}

// 마우스 이벤트 리스너를 등록합니다.
container.addEventListener("mousemove", changeImage);
