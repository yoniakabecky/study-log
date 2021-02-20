export const HOME = "/";

export const ALGORITHMS = "/algorithms";

export const SORTING = "/algorithms/sorting";
export const BUBBLE = "/algorithms/sorting/bubble";
export const SELECTION = "/algorithms/sorting/selection";

export const ANIMATIONS = "/animations";
export const DRAGGABLE = "/animations/draggable";

// for bread crumb
export const breadcrumbNameMap: { [key: string]: string } = { "/": "Home" };

breadcrumbNameMap[ALGORITHMS] = "Algorithms";
breadcrumbNameMap[SORTING] = "Sorting";
breadcrumbNameMap[BUBBLE] = "Bubble";
breadcrumbNameMap[SELECTION] = "Selection";

breadcrumbNameMap[ANIMATIONS] = "Animations";
breadcrumbNameMap[DRAGGABLE] = "Draggable";
