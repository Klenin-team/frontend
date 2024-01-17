function getFirstError(verdicts) {
  for (const verdict of verdicts) {
    if (verdict.verdict != "OK") {
      return verdict
    }
  }
}

export { getFirstError }
