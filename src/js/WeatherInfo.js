import axios from "axios";
import '../css/WeatherInfo.css'


function WeatherInfo(){
    const city = 'seoul'; // 조회하려는 도시의 이름
    const apiKey ="9c59ac8c758bb7af6ec4afbc771e28fd";
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(url)
    .then(response => {
      if (!response.data) {
        throw new Error('예상치 못한 오류 발생.'); // 응답이 성공적이지 않을 경우 오류 발생
      }
  
      const data = response.data; // Axios의 응답 데이터는 response.data에 저장됩니다.
  
      currentWeather(data); // 날씨 정보를 처리하는 함수 호출
  
      const weather = data.weather[0].main;
      const weatherImage = document.querySelector('.contents_img');
      const weatherText = document.querySelector('.contents_info_text');

      if (weather === 'Clear') { //맑음
        weatherImage.style.backgroundPosition = '5px 8px';
        weatherText.innerText = '맑음';
      } else if (weather === 'Clouds') { //흐림
        weatherImage.style.backgroundPosition = '-553px -298px';
        weatherText.innerText = '흐림';
      } else if (weather === 'Rain') { //비
        weatherImage.style.backgroundPosition = '-549px -493px';
        weatherText.innerText = '비';
      } else if (weather === 'Snow') { //눈
        weatherImage.style.backgroundPosition = '-175px -5px';
        weatherText.innerText = '눈';
      } else if (weather === 'Thunderstorm') { //천둥번개
        weatherImage.style.backgroundPosition = '-275px -5px';
        weatherText.innerText = '천둥번개';
      } else if (weather === 'Drizzle') { //이슬비
        weatherImage.style.backgroundPosition = '-549px -391px';
        weatherText.innerText = '이슬비';
      } else if (weather === 'Mist') { //안개
        weatherImage.style.backgroundPosition = '-189px -211px';
        weatherText.innerText = '안개';
      } else if (weather === 'Smoke') { //연기
        weatherImage.style.backgroundPosition = '-189px -211px';
        weatherText.innerText = '연기';
      } else if (weather === 'Haze') { //안개
        weatherImage.style.backgroundPosition = '-189px -211px';
        weatherText.innerText = '안개';
      } else if (weather === 'Dust') { //먼지
        weatherImage.style.backgroundPosition = '-4px -304px';
        weatherText.innerText = '먼지';
      } else if (weather === 'Fog') { //안개
        weatherImage.style.backgroundPosition = '-189px -211px';
        weatherText.innerText = '안개';
      } else if (weather === 'Sand') { //황사
        weatherImage.style.backgroundPosition = '-4px -304px';
        weatherText.innerText = '황사';
      } else if (weather === 'Ash') { //화산재
        weatherImage.style.backgroundPosition = '-4px -304px';
        weatherText.innerText = '화산재';
      } else if (weather === 'Squall') { //돌풍
        weatherImage.style.backgroundPosition = '-87px -6px';
        weatherText.innerText = '돌풍';
      } else if (weather === 'Tornado') { //태풍
        weatherImage.style.backgroundPosition = '-87px -6px';
        weatherText.innerText = '태풍';
      }
    })
    .catch(error => {
      alert(error.message); // 오류 처리
    });
  
    function currentWeather(data) {
        //현재 온도
        let temp = document.querySelector(".contents_info_temperature");
        let formattedTemp = data.main.temp.toFixed(1);
        temp.innerText = `${formattedTemp}°`;
      
        //최저온도
        let rowTemp = document.querySelector(".contents_degrees_min");
        let formattedRowTemp = data.main.temp_min.toFixed(0);
        rowTemp.innerText = `${formattedRowTemp}°`;
      
        //최고온도
        let highTemp = document.querySelector(".contents_degrees_max");
        let formattedHighTemp = data.main.temp_max.toFixed(0);
        highTemp.innerText = `${formattedHighTemp}°`;
      }

      return (
        <div className='contents'>
        <div className='contents_info'>
           <div className='contents_info_temperature'></div>
           <div className='contents_info_text'></div>
        </div>
        <div className='contents_compare'>어제보다 3° 낮아요</div>
        <div className="contents_degrees">
          <div className="contents_degrees_max"></div>
          <div className="contents_degrees_min"></div>
        </div>
        <div className='contents_img'></div>
      </div>
      )
}

export default WeatherInfo