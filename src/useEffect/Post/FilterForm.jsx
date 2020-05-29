import React, {useRef, useState} from 'react';
import PropTypes from 'prop-types';

FilterForm.propTypes = {
    onSubmit: PropTypes.func,
};

FilterForm.defaultProps = {
    onSubmit: null,
}

function FilterForm(props) {
    const {onSubmit} = props;
    const [searchTerm, setSearchTerm] = useState('');
    const typingTimeoutRef = useRef(null);

    function handleSearchTermChange(e) {
        let newSearchTerm = e.target.value;
        setSearchTerm(newSearchTerm);
        if(!onSubmit) return;

        if(typingTimeoutRef.current) {
            clearTimeout(typingTimeoutRef.current);
        }

        typingTimeoutRef.current = setTimeout(() => {
            const formValue = { searchTerm: newSearchTerm };
            onSubmit(formValue);
        }, 700);
    }
    return (
        <form>
            <input type="text" value={searchTerm} onChange={handleSearchTermChange} />
        </form>
    );
}

export default FilterForm;