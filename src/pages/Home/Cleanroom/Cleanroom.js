import { useNavigate } from 'react-router-dom';
import styles from './Cleanroom.module.scss';
import i100c from '../../../assests/100c.jpg';
import i100p from '../../../assests/100c.jpg';
import i100cp from '../../../assests/pcco3.jpg';
function Cleanroom() {
    const navigate=useNavigate()
    const describe = [
        {
            img: i100c,
            name: `ZANDAIR TM 100C`,
            dec: `Air Purification for ART`,
        },
        {
            img: i100cp,
            name: `ZANDAIR PCOC TM 3`,
            dec: `Air Purification Unit`,
        },
        
        {
            img: i100p,
            name: `ZANDAIR TM 100p`,
            dec: `Air Purification for Pathology`,
        },
    ];

    return (
        <div className={styles.container}>  
            <div className={styles.clean}>
                <h1><span className={styles.un}>Our</span> Products</h1>
            </div>
            <div className={styles.gdcontainer}>
                {describe.map((item) => (
                    <div className={styles.gd_item} key={item.id}>
                        <img src={item.img} alt={item.name}
                        onClick={()=>navigate(`/product`)}
                        style={{cursor:'pointer'}}
                        />
                        <h3>{item.name}</h3>
                        <p className={styles.dec_item}>{item.dec}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Cleanroom;
