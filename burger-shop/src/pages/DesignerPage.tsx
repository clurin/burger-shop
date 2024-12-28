import Table from '../features/Ingredients/components/Table'
import Burger from '../features/Ingredients/components/Burger'
import InfoModal from '../features/Ingredients/components/modal/InfoModal'

type Props = {}

const DesignerPage = (props: Props) => {
    return (
        <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
        }}>
            <Table />
            <Burger />
            <InfoModal />
        </div>
    )
}

export default DesignerPage