export function searchFind(rows: any[] | undefined, query: string) {
  if (!rows) return;
  const columns = rows[0] && Object.keys(rows[0]);
  return rows.filter(row =>
    columns.some((column: string) => {
      if (!!row[column])
        return (
          row[column].toString().toLowerCase().indexOf(query.toLowerCase()) > -1
        );
    }),
  );
}
