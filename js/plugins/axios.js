import axios from 'https://cdn.jsdelivr.net/npm/axios@1.4.0/+esm'

export default axios.create({
  baseURL: 'https://sorteosclaro.pe/',
  headers: {
    Authorization: 'Bearer ' + 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiNmRkOGQyM2I0Nzk3MmI4YzE0OWM3ZThmNmI5M2M3YjNhYTA2YWMyMTYwNzE4M2Q0NmExMmVkNmYxNGQ0ZDBmYWE3OTU0M2JiNWEyNzUyYTkiLCJpYXQiOjE2OTk1NDI4MTAuNzYxMTc2LCJuYmYiOjE2OTk1NDI4MTAuNzYxMTgsImV4cCI6MTczMTE2NTIxMC43NDgwMywic3ViIjoiIiwic2NvcGVzIjpbXX0.0KJNGHuCjLxCjyFijoriKdZC2Yw9F0wSTFophCsATTTsb7gvo4CCpwd6mdvtg8ms6ogrFi-1-56A_6gU6RXXgohC4tOXtLEBhHFYrvkxDwyOervMgPHEHhur4TQW6GEqElNCUa8Dx4cKF1IX2YpurEZ-Rt4-KGor3dOKPuLGhbQu-L76QdqArp60j1yWDqoQsSjvu6iKAgf3nk87if4MD6DMFZA8VU63RdnUuaPhGiGF5GxE_EjREqI_E0fr3TZPfqvBH1Vofuwsu-AlWcr3Dapiqw7GBB1f3Cn0D7v2la-fOUHuA3n5iuPZTnq_P2dA0JggNApuwd79FG9d5S9OAq-u0WPq_EayLdRh3sR5hMDD_aznXmaFC4Jy1othKmx8TK6M0BWm6en5V9N95_I7pt3vXCffJXQINra7WAOdg7MrX54qCd4tirVZlbq-eAJ-8z4sM8_kElOJCZMyZ0JTUp76b7YL-lyBM962VFX4KBBVcZK22bOZZbAV2pvWMX0PiMnGCgI35M6UKGj2w5Fo7pggew8ca-ZmhRqES01Igm_pOvjro90XerBv2WMkBWuM1WaWIN4T14q_s38YFKBGmhew-tB-bwuoiQQ-FfY_dEku4W5cyOFmMXg10XGGac10y10YysUaud7bkwHlvhLC2S56oDIPziSSyhweesxbrcA'
  }
})