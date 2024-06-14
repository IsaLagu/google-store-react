import './QntySelect.scss';

 const QntySelect = () => {
    return(
        <select className="qntySelect">
                    {[
                        ...Array(10).keys(),
                    ].map(number => {
                        const num = number + 1;
                        return <option value={num} key={num}>
                            {num}
                        </option>
                    })
                    }
        </select>
    )
}

export default QntySelect