import { useAppDispatch, useAppSelector } from "../app/index"
import { accessTokenSelector, logOutToken } from "../features/Profile/userSlice"

type Props = {}

const ProfilePage = (props: Props) => {
  const accessToken = useAppSelector(accessTokenSelector)
  const dispatch = useAppDispatch()

  const logOut = () => {
    dispatch(logOutToken(null))
    alert("Вы вышли из профиля")
  }
  console.log(accessToken)
  console.log(localStorage.getItem('accessToken'))


  console.error(localStorage.getItem('accessToken'))
  return <>
    <p className="text text_type_main-small" style={{ padding: '30px' }} >
      <a href='http://localhost:3000/orderlist'>ПРОСМОТРЕТЬ ЗАКАЗЫ</a>
    </p>
    <p className="text text_type_main-small" style={{ padding: '30px' }}
      onClick={logOut}>
      ВЫЙТИ ИЗ ПРОФИЛЯ
    </p>
  </>
}

export default ProfilePage

// Решить через ОВЕРЛЕЙ