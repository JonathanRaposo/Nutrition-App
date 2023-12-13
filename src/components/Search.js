import { Divider, Input } from 'antd';

const Search = ({ handleSearch }) => {
    return (
        <div className="SearchBar">
            <Divider>Search</Divider>
            <label>Search</label>
            <Input
                value={undefined}
                type="text"
                onChange={handleSearch}
            />
        </div>
    );
}

export default Search;