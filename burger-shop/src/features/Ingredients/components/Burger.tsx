import { Button } from '@ya.praktikum/react-developer-burger-ui-components'
import { useAppDispatch, useAppSelector } from '../../../app/index'
import { burgerSelector, clearBurger } from '../ingredientsSlice'
import style from './Burger.module.css'
import { useAddOrderMutation } from '../../Order/ordersApi'

type Props = {}

const Burger = (props: Props) => {
    const burger = useAppSelector(burgerSelector)
    const [addOrder] = useAddOrderMutation()
    const dispatch = useAppDispatch()
    const totalCost = burger.reduce((a, b) => a + b.price * b.__v, 0)

    async function trigger() {
        if (burger.length === 0) {
            alert('Добавьте ингредиенты перед оформлением заказа!')
            return
        }

        const result = await addOrder(burger)

        if (result?.data?.success) {
            alert(result?.data?.message)
            dispatch(clearBurger(null))
        } else {
            alert("Произошла ошибка с добавлением заказа!")
        }
    }
    return (
        <div className={style.container}>
            {burger.map((ingredient) => (
                <div className={style.ingredient} key={ingredient._id}>
                    <img className={style.image} src={ingredient.image_mobile} alt={ingredient.name} />
                    <p className="text text_type_main-small" style={{ paddingTop: '30px' }}>x{ingredient.__v}</p>
                    <p className="text text_type_main-small" style={{ padding: '25px' }}>{ingredient.name}</p>
                </div>
            ))}

            <p className="text text_type_main-medium">Цена: {totalCost}</p>
            <div className={style.orderButton} onClick={trigger}>
                <Button htmlType={'button'}>Сделать заказ</Button>
            </div>
        </div >
    )
}

export default Burger

