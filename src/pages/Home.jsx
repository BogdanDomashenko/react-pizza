import React, {useCallback, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {
    Categories,
    Pagination,
    PizzaBlock,
    PizzaLoadingBlock,
    SortPopup,
} from "../components";
import {useCategories, useCategory, usePagination, usePizzas} from "../hooks";
import {addCartItem} from "../redux/actions/cart";
import {setSortBy} from "../redux/actions/filters";
import {cartIdGenerate} from "../utils/helpers";

const Home = () => {
    const dispatch = useDispatch();

    const isLoaded = useSelector(({pizzas}) => pizzas.isLoaded);
    const {sortBy} = useSelector(({filters}) => filters);
    const {items: cartItems} = useSelector((state) => state.cart);
    const {selectedFields} = useSelector((state) => state.pizzas);
    const {totalCount} = useSelector(({pizzas}) => pizzas.items);

    const [categoryNames, setCategoryNames] = useState();
    const categories = useCategories();
    const [category, setCategory] = useCategory();

    const pagination = usePagination(totalCount, 12);

    const pizzas = usePizzas(pagination.page, pagination.rowsPerPage);

    useEffect(() => {
        setCategoryNames(categories.map((category) => category.name));
    }, [categories]);

    const onSelectCategory = useCallback((index) => {
        setCategory(index);
    }, []);

    const onSelectSortType = useCallback((type) => {
        dispatch(setSortBy(type));
    });

    const onAddItemToCart = useCallback((item) => {
        dispatch(addCartItem({item, selectedProps: selectedFields[item.id]}));
    });

    //!!! EXTRA RERENDR if we remove selectedFields and pizzas length equality check


    return (
        <div className="container">
            <div className="content__top">
                <Categories
                    activeCategory={category}
                    onClickCategory={onSelectCategory}
                    items={categoryNames}
                />
                <SortPopup
                    items={[
                        {name: "popular", type: "popular"},
                        {name: "price", type: "price"},
                        {name: "alphabet", type: "alphabet"},
                    ]}
                    activeSortType={sortBy}
                    onClickSortType={onSelectSortType}
                />
            </div>
            <h2 className="content__title">All pizzas</h2>
            {
                <div className="content__items">
                    {isLoaded && pizzas.length === Object.keys(selectedFields).length
                        ? pizzas.map((item, index) => {
                                const cartItem = cartItems[cartIdGenerate(item.id, selectedFields[item.id].type, selectedFields[item.id].size)];
                                return selectedFields[item.id] ? (
                                    <PizzaBlock
                                        key={index}
                                        cartCount={
                                            cartItem ? cartItem.count : 0
                                        }
                                        selectedFields={selectedFields[item.id]}
                                        {...item}
                                        onAddToCart={() => onAddItemToCart(item)}
                                    />
                                ) : (
                                    ""
                                )
                            }
                        )
                        : Array(12)
                            .fill()
                            .map((_, index) => <PizzaLoadingBlock key={index}/>)}
                </div>
            }
            {totalCount ? <Pagination {...pagination} /> : ""}
        </div>
    );
};

export default Home;
