//const NUMBER_OF_INTEGERS = [8000, 16000, 32000, 64000, 128000];
//const NUMBER_OF_STRINGS = [2000, 4000, 8000, 16000, 32000];
const NUMBER_OF_INTEGERS = [8000, 16000, 32000, 64000, 128000];
const NUMBER_OF_STRINGS = [2000, 4000, 32000, 64000, 128000];

function App() {
  const [shellSortIntegers, setShellSortIntegers] = React.useState([
    0, 0, 0, 0, 0,
  ]);
  const [quickSortIntegers, setQuickSortIntegers] = React.useState([
    0, 0, 0, 0, 0,
  ]);
  const [shellQuickSortIntegers, setShellQuickSortIntegers] = React.useState([
    0, 0, 0, 0, 0,
  ]);

  const [shellSortStrings, setShellSortStrings] = React.useState([
    0, 0, 0, 0, 0,
  ]);
  const [quickSortStrings, setQuickSortStrings] = React.useState([
    0, 0, 0, 0, 0,
  ]);
  const [shellQuickSortStrings, setShellQuickSortStrings] = React.useState([
    0, 0, 0, 0, 0,
  ]);

  const calculateExecutionTime = (arr, myFunction) => {
    const startTime = new Date().getTime();
    myFunction(arr);
    const endTime = new Date().getTime();
    return endTime - startTime;
  };

  //Shell Sort

  const shellSortIntegersMethod = (arr) => {
    const n = arr.length;
  let gap = Math.floor(n / 2);

  while (gap > 0) {
    for (let i = gap; i < n; i++) {
      const temp = arr[i];
      let j;

      for (j = i; j >= gap && arr[j - gap] > temp; j -= gap) {
        arr[j] = arr[j - gap];
      }

      arr[j] = temp;
    }

    gap = Math.floor(gap / 2);
  }

  console.log(arr);
  if (!check_if_sorted(arr)) {
      console.error("NOT SORTED!!!");
    }
    return arr;
  };

  const quickSortIntegersMethod = (array) => {
    let left = 0;
    let right = array.length - 1;
    quickSort(array, left, right);
    function quickSort(arr, left, right) {
      if (left < right) {
        const pivotIndex = partition(arr, left, right);
        quickSort(arr, left, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, right);
      }

      return arr;
    }

    function partition(arr, left, right) {
      const pivotValue = arr[right];
      let pivotIndex = left;

      for (let i = left; i < right; i++) {
        if (arr[i] < pivotValue) {
          [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
          pivotIndex++;
        }
      }

      [arr[right], arr[pivotIndex]] = [arr[pivotIndex], arr[right]];
      return pivotIndex;
    }
  };

  const shellQuickSortIntegersMethod = (arr) => {
    let left = 0;
    let right = arr.length - 1;
    quickSort(arr, left, right);

    function quickSort(arr, left, right) {
      if (right - left <= 10) {
        insertionSort(arr, left, right);
        return;
      }

      // Partition the array
      const pivotIndex = partition(arr, left, right);

      // Recursively sort the left and right sub-arrays
      quickSort(arr, left, pivotIndex - 1);
      quickSort(arr, pivotIndex + 1, right);
    }
    function partition(arr, left, right) {
      // Choose the rightmost element as the pivot
      const pivotValue = arr[right];
      let pivotIndex = left;

      // Partition the sub-array into elements less than and greater than the pivot
      for (let i = left; i < right; i++) {
        if (arr[i] < pivotValue) {
          swap(arr, i, pivotIndex);
          pivotIndex++;
        }
      }

      // Move the pivot element to its final position
      swap(arr, pivotIndex, right);
      return pivotIndex;
    }

    function insertionSort(arr, left, right) {
      for (let i = left + 1; i <= right; i++) {
        const current = arr[i];
        let j = i - 1;

        while (j >= left && arr[j] > current) {
          arr[j + 1] = arr[j];
          j--;
        }

        arr[j + 1] = current;
      }
    }

    function swap(arr, i, j) {
      const temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }

    if (!check_if_sorted(arr)) {
      console.error("NOT SORTED!!!");
    }
  };

  const shellSortStringsMethod = (arr) => {
    if (!check_if_sorted(arr)) {
      console.error("NOT SORTED!!!");
    }
  };

  const quickSortStringsMethod = (arr) => {
    if (!check_if_sorted(arr)) {
      console.error("NOT SORTED!!!");
    }
  };

  const shellQuickSortStringsMethod = (arr) => {
    let left = 0;
    let right = arr.length - 1;
    quicksortInsertion(arr, left, right);
    function quicksortInsertion(arr, left, right) {
      // If the array has less than 10 elements, use insertion sort
      if (right - left < 10) {
        insertionSort(arr, left, right);
        return;
      }

      // Use quicksort for larger arrays
      if (left < right) {
        const pivotIndex = partition(arr, left, right);
        quicksortInsertion(arr, left, pivotIndex - 1);
        quicksortInsertion(arr, pivotIndex + 1, right);
      }
    }

    function partition(arr, left, right) {
      const pivotValue = arr[right];
      let i = left - 1;
      for (let j = left; j < right; j++) {
        if (arr[j] < pivotValue) {
          i++;
          swap(arr, i, j);
        }
      }
      swap(arr, i + 1, right);
      return i + 1;
    }

    function insertionSort(arr, left, right) {
      for (let i = left + 1; i <= right; i++) {
        const currentValue = arr[i];
        let j = i - 1;
        while (j >= left && arr[j] > currentValue) {
          arr[j + 1] = arr[j];
          j--;
        }
        arr[j + 1] = currentValue;
      }
    }

    function swap(arr, i, j) {
      const temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
    if (!check_if_sorted(arr)) {
      console.error("NOT SORTED!!!");
    }
  };

  const sortForIntegers = async () => {
    //setIsLoadingIntegers(true);
    console.log("method called");
    let shellSortMethodResults = [];
    let quickSortMethodResults = [];
    let shellQuickSortMethodResults = [];

    NUMBER_OF_INTEGERS.map((length) => {
      let arr = generateIntegerArray(length);
      // shell / sort / quickSort
      shellSortMethodResults.push(
        calculateExecutionTime(arr, shellSortIntegersMethod)
      );
      //arr = generateIntegerArray(length);
      quickSortMethodResults.push(
        calculateExecutionTime(arr, quickSortIntegersMethod)
      );
      //arr = generateIntegerArray(length);
      shellQuickSortMethodResults.push(
        calculateExecutionTime(arr, shellQuickSortIntegersMethod)
      );
    });
    setShellSortIntegers(shellSortMethodResults);
    setQuickSortIntegers(quickSortMethodResults);
    setShellQuickSortIntegers(shellQuickSortMethodResults);
  };

  const sortForStrings = () => {
    console.log("method called");
    //setIsLoadingStrings(true);
    let shellSortMethodResults = [];
    let quickSortMethodResults = [];
    let shellQuickSortMethodResults = [];
    NUMBER_OF_STRINGS.map((length) => {
      let strings = generateStringArray(length);
      shellSortMethodResults.push(
        calculateExecutionTime(strings, shellSortStringsMethod)
      );
      quickSortMethodResults.push(
        calculateExecutionTime(strings, quickSortStringsMethod)
      );
      shellQuickSortMethodResults.push(
        calculateExecutionTime(strings, shellQuickSortStringsMethod)
      );
    });
    //setIsLoadingStrings(false);
    setShellSortStrings(shellSortMethodResults);
    setQuickSortStrings(quickSortMethodResults);
    setShellQuickSortStrings(shellQuickSortMethodResults);
  };

  return (
    <div>
      <p>Lab 2</p>
      <h2>For Integers :</h2>
      <button onClick={sortForIntegers}>Sort Integers in All methods :</button>
      <h4>Shell Sort Method : </h4>
      <p>shell sort method results: </p>
      {shellSortIntegers.map((result, index) => (
        <li key={index}>{result} ms</li>
      ))}
      <h4>quick sort Method results: </h4>
      <p>quick sort Method Resuts: </p>
      {quickSortIntegers.map((result, index) => (
        <li key={index}>{result} ms</li>
      ))}
      <h4>shell quick sort method results : </h4>
      <p>shell quick sort Method Resuts: </p>
      {shellQuickSortIntegers.map((result, index) => (
        <li key={index}>{result} ms</li>
      ))}

      <h2>For Strings :</h2>
      <button onClick={sortForStrings}>Sort Strings in All methods :</button>
      <h4>Shell Sort Method : </h4>
      <p>shell sort Method Resuts: </p>
      {shellSortStrings.map((result, index) => (
        <li key={index}>{result} ms</li>
      ))}
      <h4>Quick Sort Method : </h4>
      <p>quick sort Method Resuts: </p>
      {quickSortStrings.map((result, index) => (
        <li key={index}>{result} ms</li>
      ))}
      <h4>Shell Quick Sort Method : </h4>
      <p>shell quick Method Resuts: </p>
      {shellQuickSortStrings.map((result, index) => (
        <li key={index}>{result} ms</li>
      ))}
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

function check_if_sorted(arr) {
  let i = 1;
  let is_sorted = 1;
  while (i < arr.length && is_sorted) {
    if (arr[i - 1] > arr[i]) {
      is_sorted = 0;
      break;
    }
    i += 1;
  }
  return is_sorted;
}

function check_if_sorted_strings(str) {
  let i = 1;
  let is_sorted = 1;
  while (i < str.length && is_sorted) {
    if (str[i - 1] < str[i]) {
      is_sorted = 0;
      break;
    }
    i += 1;
  }
  return is_sorted;
}

function generateIntegerArray(length) {
  let arr = [];
  for (let i = 0; i < length; i++) {
    arr.push(Math.floor(Math.random() * 10000)); // generates a random integer between 0 and 99
  }
  return arr;
}

function generateStringArray(length) {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  let strings = [];
  for (let i = 0; i < length; i++) {
    let stringLength = Math.floor(Math.random() * 3) + 6;
    let randomString = "";
    for (let j = 0; j < stringLength; j++) {
      const randomCharIndex = Math.floor(Math.random() * chars.length);
      randomString += chars[randomCharIndex];
    }
    strings.push(randomString);
  }

  return strings;
}
