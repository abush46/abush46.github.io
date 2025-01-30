function calChange() {
  //Printing per Sheets
  var printW = document.getElementById("printW").value;
  var printH = document.getElementById("printH").value;
  var paperW = document.getElementById("paperW").value;
  var paperH = document.getElementById("paperH").value;
  var stright_cal = Math.floor(
    parseInt(paperH / printH) * parseInt(paperW / printW)
  );
  var angle_cal = Math.floor(
    parseInt(paperW / printH) * parseInt(paperH / printW)
  );
  var max_value = Math.max(stright_cal, angle_cal);
  var printing_sheets = (document.getElementById("printing_sheets").innerHTML =
    max_value);

  //Total Sheets will need.
  var PQty = document.getElementById("PQty").value;
  var total_sheets = (document.getElementById("total_sheets").innerHTML =
    Math.round(PQty / printing_sheets));

  //Total Packet
  var packet_sheets = document.getElementById("packet_sheets").value;
  document.getElementById("total_packets").innerHTML = parseFloat(
    total_sheets / packet_sheets
  ).toFixed(2);

  //Total Printing Impressions (Small Demy)
  var printing_Color = document.getElementById("printing_Color").value;
  var printing_Color_side = document.getElementById(
    "printing_Color_side"
  ).value;

  document.getElementById("SDW").innerHTML = Math.round(paperW / 2);
  document.getElementById("SDH").innerHTML = Math.round(paperH / 2 / 2);
  document.getElementById("SDW_qty").innerHTML = Math.round(
    (PQty / (printing_sheets / 8)) * (printing_Color * printing_Color_side)
  );

  //Total Printing Impressions (Quarter Size Demy)
  document.getElementById("QDW").innerHTML = Math.round(paperW / 2);
  document.getElementById("QDH").innerHTML = Math.round(paperH / 2);
  document.getElementById("QDW_qty").innerHTML = Math.round(
    (PQty / (printing_sheets / 4)) * (printing_Color * printing_Color_side)
  );

  //Total Printing Impressions (Half Size Demy)
  document.getElementById("HDW").innerHTML = Math.round(paperW);
  document.getElementById("HDH").innerHTML = Math.round(paperH / 2);
  document.getElementById("HDW_qty").innerHTML = Math.round(
    (PQty / (printing_sheets / 2)) * (printing_Color * printing_Color_side)
  );

  //Total Printing Impressions (Full Size DD)
  document.getElementById("FDW").innerHTML = Math.round(paperW);
  document.getElementById("FDH").innerHTML = Math.round(paperH);
  document.getElementById("FDW_qty").innerHTML = Math.round(
    (PQty / printing_sheets) * (printing_Color * printing_Color_side)
  );

  //Per Sheet Cost
  var packet_price = document.getElementById("packet_price").value;
  var sheet_cost = (document.getElementById("sheet_cost").innerHTML =
    parseFloat(packet_price / packet_sheets).toFixed(2));

  //Table Paper qty
  document.getElementById("papertd_qty").innerHTML = total_sheets;

  //Paper costing for all sizes
  var paper_cost_td = (document.getElementById("paper_cost_td").innerHTML =
    parseFloat(total_sheets * sheet_cost).toFixed(2));
  var paper_cost_tdqty = (document.getElementById(
    "paper_cost_tdqty"
  ).innerHTML = parseFloat(total_sheets * sheet_cost).toFixed(2));
  var paper_cost_tdhlf = (document.getElementById(
    "paper_cost_tdhlf"
  ).innerHTML = parseFloat(total_sheets * sheet_cost).toFixed(2));
  var paper_cost_tdfull = (document.getElementById(
    "paper_cost_tdfull"
  ).innerHTML = parseFloat(total_sheets * sheet_cost).toFixed(2));

  //Total Plate
  var plate_tdqty = (document.getElementById("plate_tdqty").innerHTML =
    printing_Color * printing_Color_side);

  //Plate Pricing
  var plateD = document.getElementById("plateD").value;
  var plateDD = document.getElementById("plateDD").value;

  document.getElementById("plate_pricetd").innerHTML = plateD;
  var plate_price_tdsml = (document.getElementById(
    "plate_price_tdsml"
  ).innerHTML = parseFloat(plate_tdqty * plateD).toFixed(2));
  var plate_price_tdqtr = (document.getElementById(
    "plate_price_tdqtr"
  ).innerHTML = parseFloat(plate_tdqty * plateD).toFixed(2));
  var plate_price_tdhtr = (document.getElementById(
    "plate_price_tdhtr"
  ).innerHTML = parseFloat(plate_tdqty * plateD).toFixed(2));
  var plate_price_tdfull = (document.getElementById(
    "plate_price_tdfull"
  ).innerHTML = parseFloat(plate_tdqty * plateDD).toFixed(2));

  //Printing Pricing
  var printing_priceD = document.getElementById("printing_priceD").value;
  var printing_priceDD = document.getElementById("printing_priceDD").value;

  var print_pricesml = (document.getElementById("print_pricesml").innerHTML =
    parseFloat(
      (Math.round((PQty / (printing_sheets / 8)) * plate_tdqty) / 1000) *
        printing_priceD
    ).toFixed(2));
  var print_priceqty = (document.getElementById("print_priceqty").innerHTML =
    parseFloat(
      (Math.round((PQty / (printing_sheets / 4)) * plate_tdqty) / 1000) *
        printing_priceD
    ).toFixed(2));
  var print_pricehlf = (document.getElementById("print_pricehlf").innerHTML =
    parseFloat(
      (Math.round((PQty / (printing_sheets / 2)) * plate_tdqty) / 1000) *
        printing_priceD
    ).toFixed(2));
  var print_pricefull = (document.getElementById("print_pricefull").innerHTML =
    parseFloat(
      (Math.round((PQty / printing_sheets) * plate_tdqty) / 1000) *
        printing_priceDD
    ).toFixed(2));

  //Lamination
  var Laminatio_trqty = document.getElementById("Laminatio_trqty").value;
  var Laminatio_trprice = document.getElementById("Laminatio_trprice").value;
  var lamination_sml = (document.getElementById("lamination_sml").innerHTML =
    parseFloat(Laminatio_trqty * Laminatio_trprice).toFixed(2));
  document.getElementById("lamination_mdn").innerHTML = parseFloat(
    Laminatio_trqty * Laminatio_trprice
  ).toFixed(2);
  document.getElementById("lamination_hlf").innerHTML = parseFloat(
    Laminatio_trqty * Laminatio_trprice
  ).toFixed(2);
  document.getElementById("lamination_full").innerHTML = parseFloat(
    Laminatio_trqty * Laminatio_trprice
  ).toFixed(2);

  //UV Lamination
  var UVL_trqty = document.getElementById("UVL_trqty").value;
  var UVL_trprice = document.getElementById("UVL_trprice").value;
  var UVL_sml = (document.getElementById("UVL_sml").innerHTML = parseFloat(
    UVL_trqty * UVL_trprice
  ).toFixed(2));
  document.getElementById("UVL_mdn").innerHTML = parseFloat(
    UVL_trqty * UVL_trprice
  ).toFixed(2);
  document.getElementById("UVL_hlf").innerHTML = parseFloat(
    UVL_trqty * UVL_trprice
  ).toFixed(2);
  document.getElementById("UVL_full").innerHTML = parseFloat(
    UVL_trqty * UVL_trprice
  ).toFixed(2);

  //Spot Lamination
  var SpotL_trqty = document.getElementById("SpotL_trqty").value;
  var SpotL_trprice = document.getElementById("SpotL_trprice").value;
  var SpotL_sml = (document.getElementById("SpotL_sml").innerHTML = parseFloat(
    SpotL_trqty * SpotL_trprice
  ).toFixed(2));
  document.getElementById("SpotL_mdn").innerHTML = parseFloat(
    SpotL_trqty * SpotL_trprice
  ).toFixed(2);
  document.getElementById("SpotL_hlf").innerHTML = parseFloat(
    SpotL_trqty * SpotL_trprice
  ).toFixed(2);
  document.getElementById("SpotL_full").innerHTML = parseFloat(
    SpotL_trqty * SpotL_trprice
  ).toFixed(2);

  //Foil Printing
  var foil_trqty = document.getElementById("foil_trqty").value;
  var foil_trprice = document.getElementById("foil_trprice").value;
  var foil_sml = (document.getElementById("foil_sml").innerHTML = parseFloat(
    foil_trqty * foil_trprice
  ).toFixed(2));
  document.getElementById("foil_mdn").innerHTML = parseFloat(
    foil_trqty * foil_trprice
  ).toFixed(2);
  document.getElementById("foil_hlf").innerHTML = parseFloat(
    foil_trqty * foil_trprice
  ).toFixed(2);
  document.getElementById("foil_full").innerHTML = parseFloat(
    foil_trqty * foil_trprice
  ).toFixed(2);

  //Normal Cutting
  var nCutting_trqty = document.getElementById("nCutting_trqty").value;
  var nCutting_trprice = document.getElementById("nCutting_trprice").value;
  var nCutting_sml = (document.getElementById("nCutting_sml").innerHTML =
    parseFloat(nCutting_trqty * nCutting_trprice).toFixed(2));
  document.getElementById("nCutting_mdn").innerHTML = parseFloat(
    nCutting_trqty * nCutting_trprice
  ).toFixed(2);
  document.getElementById("nCutting_hlf").innerHTML = parseFloat(
    nCutting_trqty * nCutting_trprice
  ).toFixed(2);
  document.getElementById("nCutting_full").innerHTML = parseFloat(
    nCutting_trqty * nCutting_trprice
  ).toFixed(2);

  //Die Cutting
  var dieCutting_trqty = document.getElementById("dieCutting_trqty").value;
  var dieCutting_trprice = document.getElementById("dieCutting_trprice").value;
  var dieCutting_sml = (document.getElementById("dieCutting_sml").innerHTML =
    parseFloat(dieCutting_trqty * dieCutting_trprice).toFixed(2));
  document.getElementById("dieCutting_mdn").innerHTML = parseFloat(
    dieCutting_trqty * dieCutting_trprice
  ).toFixed(2);
  document.getElementById("dieCutting_hlf").innerHTML = parseFloat(
    dieCutting_trqty * dieCutting_trprice
  ).toFixed(2);
  document.getElementById("dieCutting_full").innerHTML = parseFloat(
    dieCutting_trqty * dieCutting_trprice
  ).toFixed(2);

  //Packaging
  var packaging_trqty = document.getElementById("packaging_trqty").value;
  var packaging_trprice = document.getElementById("packaging_trprice").value;
  var packaging_sml = (document.getElementById("packaging_sml").innerHTML =
    parseFloat(packaging_trqty * packaging_trprice).toFixed(2));
  document.getElementById("packaging_mdn").innerHTML = parseFloat(
    packaging_trqty * packaging_trprice
  ).toFixed(2);
  document.getElementById("packaging_hlf").innerHTML = parseFloat(
    packaging_trqty * packaging_trprice
  ).toFixed(2);
  document.getElementById("packaging_full").innerHTML = parseFloat(
    packaging_trqty * packaging_trprice
  ).toFixed(2);

  //Carrying Cost
  var carrying_trqty = document.getElementById("carrying_trqty").value;
  var carrying_trprice = document.getElementById("carrying_trprice").value;
  var carrying_sml = (document.getElementById("carrying_sml").innerHTML =
    parseFloat(carrying_trqty * carrying_trprice).toFixed(2));
  document.getElementById("carrying_mdn").innerHTML = parseFloat(
    carrying_trqty * carrying_trprice
  ).toFixed(2);
  document.getElementById("carrying_hlf").innerHTML = parseFloat(
    carrying_trqty * carrying_trprice
  ).toFixed(2);
  document.getElementById("carrying_full").innerHTML = parseFloat(
    carrying_trqty * carrying_trprice
  ).toFixed(2);

  //Others(1)
  var others1_trqty = document.getElementById("others1_trqty").value;
  var others1_trprice = document.getElementById("others1_trprice").value;
  var other1_price = parseFloat(others1_trqty * others1_trprice).toFixed(2);
  var others1_sml = (document.getElementById("others1_sml").innerHTML =
    parseFloat(others1_trqty * others1_trprice).toFixed(2));
  document.getElementById("others1_mdn").innerHTML = other1_price;
  document.getElementById("others1_hlf").innerHTML = other1_price;
  document.getElementById("others1_full").innerHTML = other1_price;

  //(13) Others (2)
  var others2_trqty = document.getElementById("others2_trqty").value;
  var others2_trprice = document.getElementById("others2_trprice").value;
  var others2_sml = (document.getElementById("others2_sml").innerHTML =
    parseFloat(others2_trqty * others2_trprice).toFixed(2));
  document.getElementById("others2_mdn").innerHTML = parseFloat(
    others2_trqty * others2_trprice
  ).toFixed(2);
  document.getElementById("others2_hlf").innerHTML = parseFloat(
    others2_trqty * others2_trprice
  ).toFixed(2);
  document.getElementById("others2_full").innerHTML = parseFloat(
    others2_trqty * others2_trprice
  ).toFixed(2);

  //(14) Others (3)
  var others3_trqty = document.getElementById("others3_trqty").value;
  var others3_trprice = document.getElementById("others3_trprice").value;
  var others3_sml = (document.getElementById("others3_sml").innerHTML =
    parseFloat(others3_trqty * others3_trprice).toFixed(2));
  document.getElementById("others3_mdn").innerHTML = parseFloat(
    others3_trqty * others3_trprice
  ).toFixed(2);
  document.getElementById("others3_hlf").innerHTML = parseFloat(
    others3_trqty * others3_trprice
  ).toFixed(2);
  document.getElementById("others3_full").innerHTML = parseFloat(
    others3_trqty * others3_trprice
  ).toFixed(2);

  //Smal(D) Sub Total
  var sml_sub =
    parseFloat(paper_cost_td) +
    parseFloat(plate_price_tdsml) +
    parseFloat(print_pricesml) +
    parseFloat(lamination_sml) +
    parseFloat(UVL_sml) +
    parseFloat(SpotL_sml) +
    parseFloat(foil_sml) +
    parseFloat(nCutting_sml) +
    parseFloat(dieCutting_sml) +
    parseFloat(packaging_sml) +
    parseFloat(carrying_sml) +
    parseFloat(others1_sml) +
    parseFloat(others2_sml) +
    parseFloat(others3_sml);

  document.getElementById("subtotal_sml").innerHTML =
    parseFloat(sml_sub).toFixed(2);

  //Quarter(D) Sub Total
  var mqtr_sub =
    parseFloat(paper_cost_tdqty) +
    parseFloat(plate_price_tdqtr) +
    parseFloat(print_priceqty) +
    parseFloat(lamination_sml) +
    parseFloat(UVL_sml) +
    parseFloat(SpotL_sml) +
    parseFloat(foil_sml) +
    parseFloat(nCutting_sml) +
    parseFloat(dieCutting_sml) +
    parseFloat(packaging_sml) +
    parseFloat(carrying_sml) +
    parseFloat(others1_sml) +
    parseFloat(others2_sml) +
    parseFloat(others3_sml);

  document.getElementById("subtotal_mdn").innerHTML =
    parseFloat(mqtr_sub).toFixed(2);

  //Half(D) Sub Total
  var half_sub =
    parseFloat(paper_cost_tdhlf) +
    parseFloat(plate_price_tdhtr) +
    parseFloat(print_pricehlf) +
    parseFloat(lamination_sml) +
    parseFloat(UVL_sml) +
    parseFloat(SpotL_sml) +
    parseFloat(foil_sml) +
    parseFloat(nCutting_sml) +
    parseFloat(dieCutting_sml) +
    parseFloat(packaging_sml) +
    parseFloat(carrying_sml) +
    parseFloat(others1_sml) +
    parseFloat(others2_sml) +
    parseFloat(others3_sml);

  document.getElementById("subtotal_hlf").innerHTML =
    parseFloat(half_sub).toFixed(2);

  //Full(DD) Sub Total
  var full_sub =
    parseFloat(paper_cost_tdfull) +
    parseFloat(plate_price_tdfull) +
    parseFloat(print_pricefull) +
    parseFloat(lamination_sml) +
    parseFloat(UVL_sml) +
    parseFloat(SpotL_sml) +
    parseFloat(foil_sml) +
    parseFloat(nCutting_sml) +
    parseFloat(dieCutting_sml) +
    parseFloat(packaging_sml) +
    parseFloat(carrying_sml) +
    parseFloat(others1_sml) +
    parseFloat(others2_sml) +
    parseFloat(others3_sml);

  document.getElementById("subtotal_full").innerHTML =
    parseFloat(full_sub).toFixed(2);

  //Profit 10%
  var profit_cal = document.getElementById("profit_rate").value;
  var profit_psml = (document.getElementById("proFit_sml").innerHTML = (
    (parseFloat(sml_sub) * parseFloat(profit_cal)) /
    parseFloat(100)
  ).toFixed(2));
  var profit_pmdn = (document.getElementById("proFit_mdn").innerHTML = (
    (parseFloat(mqtr_sub) * parseFloat(profit_cal)) /
    parseFloat(100)
  ).toFixed(2));
  var profit_phlf = (document.getElementById("proFit_hlf").innerHTML = (
    (parseFloat(half_sub) * parseFloat(profit_cal)) /
    parseFloat(100)
  ).toFixed(2));
  var profit_pfull = (document.getElementById("proFit_full").innerHTML = (
    (parseFloat(full_sub) * parseFloat(profit_cal)) /
    parseFloat(100)
  ).toFixed(2));

  //VAT 15%
  var vat_cal = document.getElementById("vat_rate").value;
  var vat_vsml = (document.getElementById("vAt_sml").innerHTML = parseFloat(
    ((parseFloat(sml_sub) + parseFloat(profit_psml)) * parseFloat(vat_cal)) /
      parseFloat(100)
  ).toFixed(2));
  var vat_vmdn = (document.getElementById("vAt_mdn").innerHTML = parseFloat(
    ((parseFloat(mqtr_sub) + parseFloat(profit_pmdn)) * parseFloat(vat_cal)) /
      parseFloat(100)
  ).toFixed(2));
  var vat_vhlf = (document.getElementById("vAt_hlf").innerHTML = parseFloat(
    ((parseFloat(half_sub) + parseFloat(profit_phlf)) * parseFloat(vat_cal)) /
      parseFloat(100)
  ).toFixed(2));
  var vat_vfull = (document.getElementById("vAt_full").innerHTML = parseFloat(
    ((parseFloat(full_sub) + parseFloat(profit_pfull)) * parseFloat(vat_cal)) /
      parseFloat(100)
  ).toFixed(2));

  //Total Costing
  var total_cost_s = (document.getElementById("totalCost_sml").innerHTML =
    parseFloat(
      parseFloat(sml_sub) + parseFloat(profit_psml) + parseFloat(vat_vsml)
    ).toFixed(2));
  var total_cost_m = (document.getElementById("totalCost_mdn").innerHTML =
    parseFloat(
      parseFloat(mqtr_sub) + parseFloat(profit_pmdn) + parseFloat(vat_vmdn)
    ).toFixed(2));
  var total_cost_h = (document.getElementById("totalCost_hlf").innerHTML =
    parseFloat(
      parseFloat(half_sub) + parseFloat(profit_phlf) + parseFloat(vat_vhlf)
    ).toFixed(2));
  var total_cost_f = (document.getElementById("totalCost_full").innerHTML =
    parseFloat(
      parseFloat(full_sub) + parseFloat(profit_pfull) + parseFloat(vat_vfull)
    ).toFixed(2));

  //Costing per unit
  document.getElementById("CPU_S").innerHTML = parseFloat(
    parseFloat(total_cost_s) / parseFloat(PQty)
  ).toFixed(2);
  document.getElementById("CPU_Q").innerHTML = parseFloat(
    parseFloat(total_cost_m) / parseFloat(PQty)
  ).toFixed(2);
  document.getElementById("CPU_H").innerHTML = parseFloat(
    parseFloat(total_cost_h) / parseFloat(PQty)
  ).toFixed(2);
  document.getElementById("CPU_F").innerHTML = parseFloat(
    parseFloat(total_cost_f) / parseFloat(PQty)
  ).toFixed(2);
}
