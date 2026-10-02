/**
 * Dataset customizado do Fluig: lista fixa de países para o app de viagens.
 *
 * Sintaxe ES5 e sem require/import/module.exports: no runtime do Fluig as
 * globais (DatasetBuilder, entre outras) já estão disponíveis no escopo.
 */
function createDataset(fields, constraints, sortFields) {
  // Assinatura padrão de datasets no Fluig:
  // - fields: colunas solicitadas pela consulta
  // - constraints: filtros recebidos na chamada do dataset
  // - sortFields: campos pedidos para ordenação
  //
  // Este dataset devolve sempre a mesma lista fixa de países, então os três
  // parâmetros existem apenas para respeitar o contrato do Fluig. O "void"
  // abaixo neutraliza os valores (avalia e descarta) e deixa explícito para
  // leitores e linters que o não uso é intencional, não um esquecimento.
  void fields;
  void constraints;
  void sortFields;

  var ds = DatasetBuilder.newDataset();

  ds.addColumn("codigo");
  ds.addColumn("nome");
  ds.addColumn("sigla");

  // [codigo ISO-3, nome em português, sigla ISO-2]
  var rows = [
    ["BRA", "Brasil", "BR"],
    ["USA", "Estados Unidos", "US"],
    ["ARG", "Argentina", "AR"],
    ["CHL", "Chile", "CL"],
    ["URY", "Uruguai", "UY"],
    ["PRY", "Paraguai", "PY"],
    ["BOL", "Bolívia", "BO"],
    ["PER", "Peru", "PE"],
    ["COL", "Colômbia", "CO"],
    ["VEN", "Venezuela", "VE"],
    ["MEX", "México", "MX"],
    ["DEU", "Alemanha", "DE"],
    ["ESP", "Espanha", "ES"],
    ["PRT", "Portugal", "PT"],
    ["FRA", "França", "FR"],
    ["ITA", "Itália", "IT"],
    ["GBR", "Reino Unido", "GB"],
    ["JPN", "Japão", "JP"],
    ["CHN", "China", "CN"],
    ["AUS", "Austrália", "AU"]
  ];

  for (var i = 0; i < rows.length; i++) {
    ds.addRow(rows[i]);
  }

  return ds;
}
