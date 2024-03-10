import './country.css'
const Country = ({ country }) => {
    const { name, flags } = country;
    return (
        <div className="country">
            <div>
                <img src={flags.png} className="flags" />
            </div>
            <div className='details-container'>
                <h3>Name: {name?.common}</h3>
            </div>
        </div>
    );
};

export default Country;