import React, { useCallback, useRef } from 'react';
import axios from 'axios';
import debounce from 'lodash.debounce';
import { useDispatch, useSelector } from 'react-redux';
import { setParams, setPlayers, setSearch } from '../../redux/slices/playersSlice';
import PlayersCadr from '../../components/PlayerCard';

import Skeleton from '../../components/Skeletons/PlayersSkeleton';

import style from './Players.module.css';
import Pagination from '../../components/Pagination/Pagination';

const Players = () => {
    const dispatch = useDispatch();

    const [valueInput, setValueInput] = React.useState('');
    console.log('valueInput: ', valueInput);

    const [loading, setLoading] = React.useState(true);
    const [currentPage, setCurrentPage] = React.useState(1);

    const { players, params, search } = useSelector((state) => state.playersNBA);
    console.log('search: ', search);

    const inputRef = useRef();

    const updateSearchEvent = React.useMemo(
        () =>
        debounce((str) => {
            dispatch(setSearch(str));
        }, 2000),
        [dispatch],
    );

    const onChangeInput = (e) => {
        setValueInput(e.target.value);
        updateSearchEvent(e.target.value);
    };

    const onClickClear = () => {
        dispatch(setSearch(''));
        setValueInput('');
        inputRef.current.focus();
    };

    const fetchPlayers = useCallback(async () => {
        setLoading(true);
        const searchResult = search ? `&search=${search}` : '';
        try {
            const resPlayers = await axios.get(
                `https://www.balldontlie.io/api/v1/players?page=${currentPage}${searchResult}`,
            );
            dispatch(setPlayers(resPlayers.data.data));
            dispatch(setParams(resPlayers.data.meta));
        } catch (error) {
            console.log('error: ', error);
        } finally {
            setLoading(false);
        }
    }, [dispatch, currentPage, search]);

    React.useEffect(() => {
        fetchPlayers();

        window.scroll(0, 0);
    }, [fetchPlayers]);

    return (
        <div className={style.root}>
            <div className={style.inputWrapper}>
                <svg
                    className={style.searchIcon}
                    width="40px"
                    height="40px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM9 11.5C9 10.1193 10.1193 9 11.5 9C12.8807 9 14 10.1193 14 11.5C14 12.8807 12.8807 14 11.5 14C10.1193 14 9 12.8807 9 11.5ZM11.5 7C9.01472 7 7 9.01472 7 11.5C7 13.9853 9.01472 16 11.5 16C12.3805 16 13.202 15.7471 13.8957 15.31L15.2929 16.7071C15.6834 17.0976 16.3166 17.0976 16.7071 16.7071C17.0976 16.3166 17.0976 15.6834 16.7071 15.2929L15.31 13.8957C15.7471 13.202 16 12.3805 16 11.5C16 9.01472 13.9853 7 11.5 7Z"
                        fill="dodgerblue"
                    />
                </svg>
                <input
                    className={style.input}
                    ref={inputRef}
                    value={valueInput}
                    onChange={onChangeInput}
                    type="text"
                    placeholder="search player..."
                />
                {valueInput && (
                    <svg
                        className={style.closeIcon}
                        onClick={onClickClear}
                        width="40px"
                        height="40px"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM15.36 14.3C15.65 14.59 15.65 15.07 15.36 15.36C15.21 15.51 15.02 15.58 14.83 15.58C14.64 15.58 14.45 15.51 14.3 15.36L12 13.06L9.7 15.36C9.55 15.51 9.36 15.58 9.17 15.58C8.98 15.58 8.79 15.51 8.64 15.36C8.35 15.07 8.35 14.59 8.64 14.3L10.94 12L8.64 9.7C8.35 9.41 8.35 8.93 8.64 8.64C8.93 8.35 9.41 8.35 9.7 8.64L12 10.94L14.3 8.64C14.59 8.35 15.07 8.35 15.36 8.64C15.65 8.93 15.65 9.41 15.36 9.7L13.06 12L15.36 14.3Z"
                            fill="dodgerblue"
                        />
                    </svg>
                )}
            </div>

            <div className={style.players}>
                {loading
                    ? [...new Array(20)].map((_, index) => <Skeleton key={index} />)
                    : players.map((player) => <PlayersCadr key={player.id} player={player} />)}
            </div>
            <Pagination params={params} onClickPagin={(number) => setCurrentPage(number)} />
        </div>
    );
};

export default Players;
