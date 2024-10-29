export const withCharacterLimit = (
  limit: number,
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  callback: (e: unknown) => void
) => {
  if (e.target.value.length > limit) {
    return undefined;
  }

  callback(e.target.value);
};
