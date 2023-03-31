import React from 'react';

const Question = () => {
    return (
        <div className='my-12 lg:mx-0 mx-5 '>
            <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    Props vs State
                </div>
                <div className="collapse-content">
                    <p className='font-bold'>Both are Data Managment system but there are something difference</p>
                    <p className='my-3'>1: props is property of a parent component and its data distribute only its child component and its data direction is uni-directional. This property is a immutable in react</p>
                    {/* <p className='my-3'>1: props is property of a parent component and its data distribute only its child component and its data direction is uni-directional. This property is a immutable in react</p> */}
                    <p>2: State is a internal Data of a component. And it changes by it's internal operation. And it's a mutable property in react</p>
                </div>
            </div>

            <div tabIndex={0} className="collapse my-4 collapse-plus border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    How does useState work?
                </div>
                <div className="collapse-content">
                   <p>UseState is hook in react , by this using we can manage component's State. And It is a function . This hook is a function it return two value first one is state variable  second one is state function . By state function we can manage state variable </p>
                </div>
            </div>

            <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                Purpose of useEffect other than fetching data
                </div>
                <div className="collapse-content">
                  <p>The purpose of useEffect is not limited to fetching data. We can use it to perform any operation after a selected action, like a state change. It allows us to keep track of any changes happening in the component and execute a particular function or operation whenever those changes occur. We can use it to update the DOM, interact with APIs, or perform any side effect-related tasks.</p>
                   {/* <p>UseState is hook in react , by this using we can manage component's State. And It is a function . This hook is a function it return two value first one is state variable  second one is state function . By state function we can manage state variable </p> */}
                </div>
            </div>
            <div tabIndex={0} className="collapse mt-4 collapse-plus border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                How does react work?
                </div>
                <div className="collapse-content">
                    <p>React is a JavaScript library that allows developers to create user interfaces for web applications. It uses a virtual DOM to efficiently update the UI in response to data changes. React components organize UI into a tree-like structure, and React updates the UI by calculating the minimum set of changes needed and applying them to the actual DOM. React also provides a simple way to manage state using the useState hook.</p>
                  {/* <p>The purpose of useEffect is not limited to fetching data. We can use it to perform any operation after a selected action, like a state change. It allows us to keep track of any changes happening in the component and execute a particular function or operation whenever those changes occur. We can use it to update the DOM, interact with APIs, or perform any side effect-related tasks.</p> */}
                   {/* <p>UseState is hook in react , by this using we can manage component's State. And It is a function . This hook is a function it return two value first one is state variable  second one is state function . By state function we can manage state variable </p> */}
                </div>
            </div>
        </div>
    );
};

export default Question;