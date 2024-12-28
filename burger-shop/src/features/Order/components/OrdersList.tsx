import style from './Burger.module.css'
import { useAppDispatch, useAppSelector } from '../../../app/index'
import { orderSelector, setOrders } from '../ordersSlice'
import { useEffect } from 'react'
import { useGetOrdersQuery } from '../ordersApi'

type Props = {
}

const OrdersList = (props: Props) => {
    const { data } = useGetOrdersQuery(null)
    const ordersList = useAppSelector(orderSelector)
    const dispatch = useAppDispatch()

    useEffect(() => {
        if (data) {
            dispatch(setOrders(data))
        }
    }, [data, dispatch])

    return (
        <div className={style.container}>
            {ordersList?.map((order, orderIndex) => (
                <div className={style.order} key={orderIndex}>
                    <h3 className="text text_type_main-medium">Заказ {orderIndex + 1}</h3>
                    {order.map((ingredient) => (
                        <div className={style.ingredient} key={ingredient._id + orderIndex}>
                            <img className={style.image} src={ingredient.image_mobile} alt={ingredient.name} />
                            <p className="text text_type_main-small" style={{ paddingTop: '30px' }}>x{ingredient.__v}</p>
                            <p className="text text_type_main-small" style={{ padding: '25px' }}>{ingredient.name}</p>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    )

}

export default OrdersList
