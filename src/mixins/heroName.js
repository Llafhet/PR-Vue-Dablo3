import classes from '../utils/heroClasses.js'


export function classToName(classSlug){
    return classes[classSlug] ?? classSlug
}
// export default {
//     methods: {
//         classToName(classSlug){
//             return classes[classSlug]
//         }
//     }
// }