// import React from 'react';
// import { topicsArray } from './topics';

// export default class Accordian extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       openTopic: null
//       // dropHtml: 'drop-hide',
//       // textHtml: 'text-box hidden',
//       // dropCss: 'drop-hide',
//       // textCss: 'text-box hidden',
//       // dropJs: 'drop-hide',
//       // textJs: 'text-box hidden'
//     };
//     // this.handleHtml = this.handleHtml.bind(this);
//     // this.handleCss = this.handleCss.bind(this);
//     // this.handleJavaScript = this.handleJavaScript.bind(this);
//     this.handleDrop = this.handleDrop.bind(this);
//   }

//   handleDrop(event) {
//     console.log(event.target);

//   }

//   render() {
//     return (
//       <div id='menu'>
//         <div onClick={this.handleDrop} className='container'>
//           <div className="drop-hide">
//             <h2>Hypertext Marckup Language</h2>
//           </div>
//           <div className="hidden">
//             <p>
//               {topicsArray.HTML}
//             </p>
//           </div>
//         </div>
//         <div onClick={this.handleDrop} className='container'>
//           <div className="drop-hide">
//             <h2>Cascading Style Sheets</h2>
//           </div>
//           <div className="hidden">
//             <p>
//               {topicsArray.css}
//             </p>
//           </div>
//         </div>
//         <div onClick={this.handleDrop} className='container'>
//           <div className="drop-hide">
//             <h2>JavaScript</h2>
//           </div>
//           <div className="hidden">
//             <p>
//               {topicsArray.javascript}
//             </p>
//           </div>
//         </div>
//       </div>
//     );
//   }

// }

// // handleHtml(event) {
// //   console.log(event.target);
// //   this.setState({ dropHtml: 'dropdown', textHtml: 'text-box' });
// //   if (this.state.dropHtml === 'dropdown') {
// //     this.setState({ dropHtml: 'drop-hide', textHtml: 'text-box hidden' });
// //   }
// // }

// // handleCss(event) {
// //   this.setState({ dropCss: 'dropdown', textCss: 'text-box' });
// //   if (this.state.dropCss === 'dropdown') {
// //     this.setState({ dropCss: 'drop-hide', textCss: 'text-box hidden' });
// //   }
// // }

// // handleJavaScript(event) {
// //   this.setState({ dropJs: 'dropdown', textJs: 'text-box' });
// //   if (this.state.dropJs === 'dropdown') {
// //     this.setState({ dropJs: 'drop-hide', textJs: 'text-box hidden' });
// //   }
// // }
