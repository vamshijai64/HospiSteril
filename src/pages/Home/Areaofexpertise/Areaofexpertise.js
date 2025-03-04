

import styles from './Areaofexpertise.module.scss';

function Areaofexpertise() {
    

    const data = [
        {
            img: `${process.env.PUBLIC_URL}/1_page_0001.jpg`,
            name: `Good Manufacturing Practice System`,
        },
        {
            img: `${process.env.PUBLIC_URL}/1_page_0001.jpg`,
            name: `Certificate of Compliance`,
        },
        {
            img: `${process.env.PUBLIC_URL}/3_page_0001.jpg`,
            name: `ISO 9001:2015 QMS`,
        },
        {
            img: `${process.env.PUBLIC_URL}/4_page_0001.jpg`,
            name: `Quality Management System`,
        },
        {
            img: `${process.env.PUBLIC_URL}/5_page-0001.jpg`,
            name: `Certificate of Recognition`,
        },
        {
            img: `${process.env.PUBLIC_URL}/1_page_0001.jpg`,
            name: `ISO 13485:2016 QMSMD`,
        },
    ];

    return (
        <div className={styles.aoe}>
            <div className={styles.title}> 
                <h2><span>Certifications</span></h2>
            </div>
            <div className={styles.grid_container}>
                {data.map((d, index) => (
                    <div className={styles.grid_item} key={index}
                   
                    >
                        <div className={styles.img_container}>
                            <img src={d.img} alt={d.name} />
                        </div>
                        <div className={styles.name_container}>
                            <h4>{d.name}</h4>
                        </div>
                    </div>
                ))}
            </div>
           
        </div>
    );
}

export default Areaofexpertise;
