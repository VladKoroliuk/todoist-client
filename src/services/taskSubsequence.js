import storage from "./storage.js";

function setSubsequence(newList) {
  const subsequenceData = {};
  const oldSubsequence = storage.get("subsequence");

  newList.forEach((task, idx) => {
    subsequenceData[task._id] = idx;
  });

  if (oldSubsequence == null) {
    storage.set("subsequence", JSON.stringify(subsequenceData));
    return getSubsequence(newList);
  }

  for (let item in oldSubsequence) {
    for (let taskId in subsequenceData) {
      if (item == taskId) delete oldSubsequence[item];
    }
  }

  storage.set(
    "subsequence",
    JSON.stringify({
      ...oldSubsequence,
      ...subsequenceData,
    })
  );
  return getSubsequence(newList);
}

function getSubsequence(tasksList) {
  const result = [];
  const subsequence = storage.get("subsequence");

  if (subsequence == null) {
    return tasksList;
  }

  function findAndRemove(list, callback) {
    const index = list.findIndex(callback);
    if (index < 0) {
      return null;
    }

    const result = list[index];
    list.splice(index, 1);

    return result;
  }
  const sortedSubsequence = Object.fromEntries(
    Object.entries(subsequence).sort((a, b) => a[1] - b[1])
  );

  const list = JSON.parse(JSON.stringify(tasksList));
  for (let subsequenceItem in sortedSubsequence) {
    const task = findAndRemove(list, (task) => task._id == subsequenceItem);
    if (!task) {
      continue;
    }
    result.push(task);
  }

  return result.concat(list);
}

export { setSubsequence, getSubsequence };
