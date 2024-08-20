import {
  Font,
  Page,
  Text,
  Image,
  View,
  Document,
  StyleSheet,
} from "@react-pdf/renderer";

// Create styles
const styles = StyleSheet.create({
  view: {
    width: "100%",
    height: "800px",
  },
  body: {
    paddingTop: 20,
    paddingBottom: 20,
    paddingHorizontal: 20,
  },
  positionReletive: {
    position: "relative",
  },
  positionAbsolute: {
    position: "absolute",
  },
  image: {
    maxHeight: "110px",
  },
  checkbox: {
    height: "15px",
    width: "15px",
  },
  checkbox2: {
    height: "10px",
    width: "10px",
  },
  flexbox: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  box: {
    paddingHorizontal: 5,
  },
  box10: {
    width: "10%",
  },
  box20: {
    width: "20%",
  },
  box30: {
    width: "30%",
  },
  box40: {
    width: "40%",
  },
  box50: {
    width: "50%",
  },
  box60: {
    width: "60%",
  },
  box70: {
    width: "70%",
  },
  box80: {
    width: "80%",
  },
  box90: {
    width: "90%",
  },
  box100: {
    width: "100%",
  },
  box5: {
    width: "5%",
  },
  box15: {
    width: "15%",
  },
  box25: {
    width: "25%",
  },
  box35: {
    width: "35%",
  },
  box45: {
    width: "45%",
  },
  box55: {
    width: "55%",
  },
  box65: {
    width: "65%",
  },
  box75: {
    width: "75%",
  },
  box85: {
    width: "85%",
  },
  box95: {
    width: "95%",
  },
  box33: {
    width: "33.33%",
  },
  box13: {
    width: "13.33%",
  },
  box26: {
    width: "26.66%",
  },
  box36: {
    width: "36.66%",
  },
  box53: {
    width: "53.34%",
  },
  box83: {
    width: "83.34%",
  },
  box16: {
    width: "16.66%",
  },
  box22: {
    width: "22%",
  },
  box48: {
    width: "48%",
  },
  borderright: {
    borderRight: "1px solid #e1e1e1",
  },
  borderleft: {
    borderLeft: " 1px solid #e1e1e1",
  },
  bordertop: {
    borderTop: " 1px solid #e1e1e1",
  },
  borderbottom: {
    borderBottom: " 1px solid #e1e1e1",
  },
  borderrightblack: {
    borderRight: "1px solid #000",
  },
  borderleftblack: {
    borderLeft: " 1px solid #000",
  },
  bordertopblack: {
    borderTop: " 1px solid #000",
  },
  borderbottomblack: {
    borderBottom: " 1px solid #000",
  },
  borderright2black: {
    borderRight: "1px solid #000",
  },
  borderleft2black: {
    borderLeft: " 1px solid #000",
  },
  bordertop2black: {
    borderTop: " 1px solid #000",
  },
  borderbottom2black: {
    borderBottom: " 1px solid #000",
  },
  borderradius10: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
  },
  border: {
    border: "1px solid #e1e1e1",
  },
  border2: {
    border: "2px solid #e1e1e1",
  },
  borderBlack: {
    border: "1px solid #000",
  },
  border2Black: {
    border: "2px solid #000",
  },
  borderRadius: {
    borderRadius: "50%",
  },
  bold: {
    fontWeight: "bold",
    fontFamily: "Roboto-Bold",
  },
  text6: {
    fontSize: 6,
    lineHeight: 1.2,
    fontFamily: "Roboto",
  },
  text7: {
    fontSize: 7,
    lineHeight: 1.2,
    fontFamily: "Roboto",
  },
  text8: {
    fontSize: 8,
    lineHeight: 1.2,
    fontFamily: "Roboto",
  },
  text9: {
    fontSize: 9,
    lineHeight: 1.2,
    fontFamily: "Roboto",
  },
  text10: {
    fontSize: 10,
    lineHeight: 1.2,
    fontFamily: "Roboto",
  },
  text11: {
    fontSize: 11,
    lineHeight: 1.2,
    fontFamily: "Roboto",
    // paddingLeft: 3,
  },
  text12: {
    fontSize: 12,
    lineHeight: 1.2,
    fontFamily: "Roboto",
  },
  text13: {
    fontSize: 13,
    lineHeight: 1.2,
    fontFamily: "Roboto",
  },
  text14: {
    fontSize: 14,
    lineHeight: 1.2,
    fontFamily: "Roboto",
  },
  text15: {
    fontSize: 15,
    lineHeight: 1.2,
    fontFamily: "Roboto",
  },
  text16: {
    fontSize: 16,
    lineHeight: 1.2,
    fontFamily: "Roboto",
  },
  uppercase: {
    textTransform: "uppercase",
  },
  padding1: {
    padding: 1,
  },
  padding2: {
    padding: 2,
  },
  padding3: {
    padding: 3,
  },
  padding4: {
    padding: 4,
  },
  padding5: {
    padding: 5,
  },
  padding6: {
    padding: 6,
  },
  paddingtop: {
    paddingTop: 0,
  },
  paddingbottom: {
    paddingBottom: 0,
  },
  paddingleft: {
    paddingLeft: 0,
  },
  paddingleft10: {
    paddingLeft: 10,
  },
  paddingright0: {
    paddingRight: 0,
  },
  paddingright1: {
    paddingRight: 0,
  },
  paddingright2: {
    paddingRight: 0,
  },
  paddingright10: {
    paddingRight: 10,
  },
  gridContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "10px",
    padding: "10px",
  },
  center: {
    textAlign: "center",
  },
  justify: {
    textAlign: "justify",
  },
  flex: {
    display: "flex",
    flexDirection: "row",
  },
  flexwrap: {
    flexWrap: "wrap",
  },
  aligncenter: {
    alignItems: "center",
  },
  justifycenter: {
    justifyContent: "center",
  },
  bgGrey: {
    backgroundColor: "#e1e1e1",
  },
  title: {
    fontSize: 22,
    textAlign: "center",
    fontFamily: "Roboto-Bold",
  },
  title2: {
    fontSize: 16,
    textAlign: "center",
    fontFamily: "Roboto-Bold",
  },
  title3: {
    fontSize: 14,
    textAlign: "center",
    fontFamily: "Roboto-Bold",
  },
  paddingY: {
    paddingVertical: 2,
  },
  paddingY5: {
    paddingVertical: 5,
  },
  paddingY3: {
    paddingVertical: 3,
  },
  marginY: {
    marginVertical: 2,
  },
  marginY5: {
    marginVertical: 5,
  },
  marginY10: {
    marginVertical: 10,
  },
  bgGreen: {
    backgroundColor: "#D6F1E8",
  },
  textWhite: {
    color: "#fff",
  },
  square: {
    width: "80px",
    height: "80px",
  },
  rectangle: {
    width: "120px",
    height: "20px",
  },
  underline: {
    textDecoration: "underline",
  },
  page: {
    margin: 10,
    padding: 0,
  }
});
// Create Document Component
const MyDocument = () => (
  <Document producer='Interactive Technologies Gateway' creator='Progression International' author='Progression International'>
    <Page size="A4" style={styles.body}>


      <View style={[styles.flexbox, { flexDirection: "column" }]}>

        <View
          style={[
            styles.flex,
            styles.aligncenter,

            { paddingRight: 20 },
            { justifyContent: "space-between" },
          ]}
        >

          <View style={[{ width: "50%" }]}>
            <Image
              src="../../assets/PI-logo.png"
              style={{ width: "150px", objectFit: "contain" }}
            />
          </View>

          <View style={[{ width: "50%" }]}>
            <Text
              style={[styles.text14, styles.bold, { textTransform: "uppercase" }]}
            >
              Purchase Order
            </Text>
          </View>

        </View>




        <View style={[styles.flexbox, styles.aligncenter, { paddingRight: 30 }]}>
          <View>
            <Text style={[styles.text7]}>Plot C-7, Block 4, Kehkashan, KDA Scheme No. 5 Clifton - Postal Code: 75500</Text>
            <View style={[styles.flexbox]}>
              <Text style={[styles.text7, { marginVertical: 5 }]}>Karachi, Pakistan.</Text>
              <Text style={[styles.text7, { marginVertical: 5 }]}>Telephone # : (+92213) 586-4630</Text>
            </View>
          </View>
          <View>
            <Text style={[styles.text7, { marginBottom: 5 }]}>P - I Ref # : PI-0005</Text>
            <Text style={[styles.text7]}>P.O Received Date: Tuesday, May 2024</Text>
          </View>
        </View>


        {/* 1st row */}
        <View style={[styles.flex, styles.box100, { gap: 10 }]}>
          <View style={[styles.borderBlack, styles.box100, { padding: 5, width: "30%", gap: 5 }]}>

            <View style={[styles.flex]}>
              <Text style={[styles.text8, styles.bold]}>Attn: </Text>
              <Text style={[styles.text8,]}>SADAQAT LIMITED</Text>
            </View>

            <Text style={[styles.text8]}>Karachi PAKISTAN </Text>
            <Text style={[styles.text8, styles.bold]}>Tracking Code: 040 </Text>
          </View>


          <View style={[styles.borderBlack, styles.box100, { padding: 5, width: "30%", gap: 5 }]}>

            <View style={[styles.flex]}>
              <Text style={[styles.text8]}>Customer,Brand / Label Name & Division: ITX</Text>

            </View>
            {/* 
          <View style={[styles.flex,]}>
            <Text style={[styles.text8]}>ITX</Text>
          </View> */}

            <View style={[styles.flex,]}>
              <Text style={[styles.text8, styles.bold]}>Brand: </Text>
              <Text style={[styles.text8,]}>Pull and Bear</Text>
            </View>

            <View style={[styles.flex,]}>
              <Text style={[styles.text8, styles.bold]}>Division: </Text>
              <Text style={[styles.text8,]}>Men</Text>
            </View>


          </View>



          <View style={[styles.borderBlack, styles.box100, { padding: 5, width: "30%" }]}>

            <View>
              <Text style={[styles.text8, styles.bold]}>Ship To: </Text>
              <Text style={[styles.text8]}>ITX TRADING, S.A. RUE LOUIS-D'AFFRY 6</Text>
              <Text style={[styles.text8]}>FRIBOURG, Switzerland</Text>
            </View>
            {/* 
          <View>
            <Text style={[styles.text8]}></Text>
          </View>

          <View style={[styles.flex, { justifyContent: "space-between", marginVertical: 5 }]}>
            <Text style={[styles.text8, { fontWeight: "heavy" }]}></Text>
            <Text style={[styles.text8,]}></Text>
          </View> */}




          </View>


        </View>


        {/* Item Description Row */}

        <View style={[{ marginVertical: 5 }]}>
          <View style={[styles.flexbox]}>

            <View style={[{ width: "10%" },]}>
              <Text style={[styles.text7, styles.bold]}>Item Description</Text>
            </View>

            <View style={[{ width: "20%" }]}>
              <Text style={[styles.text7]}>Ex-Factory (Ship Date: 08-20-2024)</Text>
            </View>

            <View style={[styles.flex, { width: "20%" }]}>
              <Text style={[styles.text7, styles.bold]}>Lead Time: </Text>
              <Text style={[styles.text7]}>98 Days</Text>
            </View>

            <View style={[{ width: "10%" }]}>
              <Text style={[styles.text7, styles.bold]}>Ship Mode:</Text>
            </View>

            <View style={[{ width: "10%" }]}>
              <Text style={[styles.text7, styles.bold]}>Destination</Text>
            </View>

            <View style={[{ width: "10%" }]}>
              <Text style={[styles.text7, styles.bold]}>Shipment Terms</Text>
            </View>

            <View style={[{ width: "10%" }]}>
              <Text style={[styles.text7, styles.bold]}>Payment Terms</Text>
            </View>
          </View>

          <View style={[styles.flexbox,]}>
            <View style={[{ width: "55%" }]}>
              <Text style={[styles.text8, styles.bold]}>65%COTTON 35%POLY Men FELLECE Mens Multipack Crew Neck (Zalando) </Text>
            </View>

            <View style={[{ width: "10%" }]}>
              <Text style={[styles.text7]}>Sea</Text>
            </View>

            <View style={[{ width: "10%" }]}>
              <Text style={[styles.text7]}>Spain</Text>
            </View>

            <View style={[{ width: "10%" }]}>
              <Text style={[styles.text7]}>FOB</Text>
            </View>

            <View style={[{ width: "10%" }]}>
              <Text style={[styles.text7]}>C 90 Days</Text>
            </View>

          </View>

        </View>



        {/* Horizontal Line */}
        <View style={styles.borderbottomblack}></View>


        {/* 1st after the 1st horizontal line */}

        <View style={[{ marginVertical: 5 }]}>
          <View style={[styles.flex, { gap: 10 }]}>

            <View style={[{ width: "20%" }]}>
              <Text style={[styles.text8, styles.bold, styles.underline]}>Fabrication body and trims</Text>
            </View>

            <View style={[styles.flex, styles.bgGreen, { gap: 5, width: "40%" }]}>
              <Text style={[styles.text8, styles.bold]}>PI Team: </Text>
              <Text style={[styles.text8]}>NOUMAN SHAH</Text>
            </View>


            <View style={[styles.flex, { gap: 5, width: "20%" }]}>
              <Text style={[styles.text8, styles.bold]}>C.P.O #: </Text>
              <Text style={[styles.text8]}>39184-W</Text>
            </View>

            <View style={[styles.flex, { gap: 5, width: "20%" }]}>
              <Text style={[styles.text8, styles.bold]}>Style #: </Text>
              <Text style={[styles.text8]}>7590/927</Text>
            </View>


          </View>
        </View>


        {/* 2nd box row */}

        <View>

          <View style={[styles.flex, { gap: 10 }]}>


            <View style={[styles.box100]}>

              {/* table header */}
              <View style={[styles.flexbox]}>
                <View style={[{ width: "20%" }]}>
                  <Text style={[styles.text8, styles.bold]}>Description</Text>
                </View>
                <View style={[{ width: "20%" }]}>
                  <Text style={[styles.text8, styles.bold]}>Fabric</Text>
                </View>
                <View style={[{ width: "20%" }]}>
                  <Text style={[styles.text8, styles.bold]}>Content</Text>
                </View>
                <View style={[{ width: "20%" }]}>
                  <Text style={[styles.text8, styles.bold]}>Weight</Text>
                </View>
              </View>

              <View style={[styles.borderBlack, styles.borderradius10, { height: 70, padding: 5 }]}>
                {/* Rows */}
                <View style={[styles.flexbox, { gap: 10 }]}>
                  <View style={[{ width: "20%" }]}>
                    <Text style={[styles.text8, styles.bold]}>Body</Text>
                  </View>
                  <View style={[{ width: "30%" }]}>
                    <Text style={[styles.text8]}>FELLECE</Text>
                  </View>
                  <View style={[{ width: "30%" }]}>
                    <Text style={[styles.text8]}>65% COTTON 35% POLY</Text>
                  </View>
                  <View style={[{ width: "20%" }]}>
                    <Text style={[styles.text8]}>380 </Text>
                  </View>
                </View>


              </View>



              <View style={[styles.flexbox, styles.bgGreen, { marginVertical: 5, width: "100%" }]}>

                <View style={[styles.flex, { width: "60%" }]}>
                  <Text style={[styles.text8, styles.bold, { width: "50%" }]}>Product Category: </Text>
                  <Text style={[styles.text8, { width: "50%" }]}>Knits</Text>
                </View>

                <View style={[styles.flex, { gap: 5 }]}>
                  <Text style={[styles.text8, styles.bold]}>Pcs. Per Carton</Text>
                  <Text style={[styles.text8]}>22</Text>
                </View>

              </View>
            </View>


            <View style={[styles.box100]}>
              <View style={[styles.flex, { gap: 50 }]}>
                <Text style={[styles.text8, styles.bold]}>Packing Instructions</Text>
                <View style={[styles.flexbox, { gap: 5 }]}>
                  <Text style={[styles.text8, styles.bold]}>Ratio</Text>
                  <Text style={[styles.text8]}>1</Text>
                </View>

              </View>
              <View style={[styles.borderBlack, styles.borderradius10, { height: 70, padding: 5 }]}>
                <Text> </Text>
              </View>

              <View style={[styles.flex, { gap: 50, margin: 5 }]}>
                <View style={[styles.flex, { gap: 10 }]}>
                  <Text style={[styles.text8, styles.bold, styles.underline]}>Carton Marking: </Text>
                  <Text style={[styles.text8, styles.bold]}>N/A</Text>
                </View>
              </View>

            </View>






          </View>



        </View>

        {/* 3nd box row */}

        <View>


          {/* Row 1 of the table  */}
          <View style={[styles.borderBlack, styles.flexbox, { padding: 10 }]}>

            {/* <View style={[styles.flex, { width: "50%", gap: 10 }]}> */}
            <View style={[{ width: "15%" }]}>
              <Text style={[styles.text8, styles.bold]}>Color(s)</Text>
            </View>

            <View style={[{ width: "15%" }]}>
              <Text style={[styles.text8, styles.bold]}>Refernce</Text>
            </View>

            <View style={[{ width: "15%" }]}>
              <Text style={[styles.text8, styles.bold]}>Size Range</Text>
            </View>
            {/* </View> */}



            {/* <View style={[styles.flex, { width: "50%" }]}> */}
            <View style={[{ width: "15%" }]}>
              <Text style={[styles.text8, styles.bold]}>Color Total Qty in pieces</Text>
              {/* <Text style={[styles.text8, styles.bold]}>Qty in pieces</Text> */}
            </View>

            <View style={[{ width: "15%" }]}>
              <Text style={[styles.text8, styles.bold]}>FOB Unit Price(s)</Text>
              {/* <Text style={[styles.text8, styles.bold]}>Price(s)</Text> */}
            </View>

            <View style={[{ width: "15%" }]}>
              <Text style={[styles.text8, styles.bold]}>FOB Value Sub Amount</Text>
              {/* <Text style={[styles.text8, styles.bold]}>Sub Amount</Text> */}
            </View>



            {/* </View> */}
          </View>





          {/* Row 2 of the table  */}

          <View style={[styles.flex, { gap: 0 }, styles.borderbottomblack, styles.borderleftblack, styles.borderrightblack, { padding: 5 }]}>
            {/* <View style={[styles.flexbox]}> */}


            <View style={[{ width: "15%" }]}>
              <Text style={[styles.text8, styles.bold]}>803- GREY VIGO 803- GREY VIGO 803- GREY VIGO</Text>
            </View>




          </View>

          {/* Row 3 of the table  */}

          <View style={[styles.flex, styles.borderbottomblack, styles.borderleftblack, styles.borderrightblack, { padding: 5 }]}>

            <View style={[styles.flex, { width: "15%" }]}>
              <Text style={[styles.text8]}>XS-XL </Text>
            </View>
            <View style={[styles.flex, { width: "15%" }]}>
              <Text style={[styles.text8]}>Size</Text>
            </View>


            <View style={[styles.flex, { width: "15%", gap: 10 }]}>
              <Text style={[styles.text8]}>XS</Text>
              <Text style={[styles.text8]}>S</Text>
              <Text style={[styles.text8]}>M</Text>
              <Text style={[styles.text8]}>L</Text>
              <Text style={[styles.text8]}>XL</Text>
            </View>


          </View>



          {/* Row 4 of the table  */}

          <View style={[styles.flex, styles.borderbottomblack, styles.borderleftblack, styles.borderrightblack, { padding: 5 }]}>



            <View style={[styles.flex, { width: "15%" }]}>
              <Text style={[styles.text8]}></Text>
            </View>

            <View style={[styles.flex, { width: "15%" }]}>
              <Text style={[styles.text8]}>Quantity</Text>
            </View>


            <View style={[styles.flex, { width: "15%", gap: 10 }]}>
              <Text style={[styles.text8]}>18</Text>
              <Text style={[styles.text8]}>63</Text>
              <Text style={[styles.text8]}>177</Text>
              <Text style={[styles.text8]}>177</Text>
              <Text style={[styles.text8]}>115</Text>
            </View>



            <View style={[styles.flex, { width: "15%" }]}>
              <Text style={[styles.text8]}></Text>
            </View>

            <View style={[styles.flex, { width: "15%" }]}>
              <Text style={[styles.text8]}>500 PCS</Text>
            </View>

            <View style={[styles.flex, { width: "15%" }]}>
              <Text style={[styles.text8]}>$</Text>
              <Text style={[styles.text8]}>8.78</Text>
            </View>

            <View style={[styles.flex, { width: "15%" }]}>
              <Text style={[styles.text8]}>$</Text>
              <Text style={[styles.text8]}>4,829.00</Text>
            </View>



          </View>


          {/* Row 5 of the table  */}

          <View style={[styles.flex, styles.borderbottomblack, { padding: 5 }]}>
            {/* <View style={[styles.flex]}> */}


            <View style={{ width: "15%" }}>
              <Text style={[styles.text8]}></Text>
            </View>
            <View style={{ width: "15%" }}>
              <Text style={[styles.text8]}></Text>
            </View>
            <View style={{ width: "15%" }}>
              <Text style={[styles.text8]}></Text>
            </View>
            <View style={{ width: "15%" }}>
              <Text style={[styles.text8]}>Total:-</Text>
            </View>

            <View style={{ width: "45%" }}>
              <Text style={[styles.text8]}>550</Text>
            </View>


            {/* </View> */}



          </View>


          {/* Row 6 of the table  */}

          <View style={[styles.flex, styles.borderbottomblack, { padding: 5, flexDirection: "row-reverse" }]}>
            <View style={[styles.flexbox, { width: "70%" }]}>


              <View style={{ width: "35%" }}>
                <Text style={[styles.text8, styles.bold]}>P.O Total: 550 PCS</Text>
              </View>
              <View style={{ width: "15%" }}>
                <Text style={[styles.text8]}>45.83 Dz</Text>
              </View>
              <View style={{ width: "15%" }}>
                <Text style={[styles.text8]}>25 Ctn</Text>
              </View>
              <View style={[styles.flex, { width: "35%" }]}>
                <Text style={[styles.text8]}>P.O Net FOB Value: </Text>
                <Text style={[styles.text8, styles.bold]}>$ 4,829.00</Text>
              </View>



            </View>



          </View>






        </View>


        {/* 4nd box row */}
        <View>

          {/* 1st row */}
          <View style={[styles.flex, styles.borderrightblack, styles.borderleftblack]}>


            <View style={[styles.borderrightblack, { width: "15%", paddingVertical: 5, paddingHorizontal: 10 }]}>
              <Text style={[styles.text8, styles.bold]}>Special Instructions: </Text>
            </View>
            <View style={[styles.borderrightblack, { width: "55%", paddingVertical: 5, paddingHorizontal: 10 }]}>
              <Text style={[styles.text8]}>HD PRINT ON SLEEVE</Text>
            </View>

            <View style={[styles.flex, styles.aligncenter, { width: "30%", paddingVertical: 5, paddingHorizontal: 10, flexDirection: "column" }]}>

              <Text style={[styles.text8]}>Source</Text>

              <View style={[styles.flex, { gap: 40, marginVertical: 10 }]}>
                <View>
                  <Text style={[styles.text8]}>Fabric</Text>
                  <Text style={[styles.text8]}>Local</Text>
                </View>

                <Text style={[styles.text8]}>Trim & Accessories</Text>
              </View>

            </View>

          </View>


          {/* 2st row */}

          <View style={[styles.flex, styles.borderrightblack, styles.bordertopblack, styles.borderleftblack]}>


            <View style={[styles.borderrightblack, { width: "15%", paddingVertical: 5, paddingHorizontal: 10 }]}>
              <Text style={[styles.text8, styles.bold]}>Important Note</Text>
            </View>
            <View style={[styles.borderrightblack, { width: "45%", paddingVertical: 5, paddingHorizontal: 10 }]}>
              <Text style={[styles.text8]}>N/A</Text>
            </View>

            <View style={[styles.flex, { width: "40%", paddingVertical: 5, paddingHorizontal: 10, gap: 20 }]}>


              {/* <View style={[styles.flex, { gap: 5, marginVertical: 10 }]}> */}

              <View style={[styles.flex, { gap: 50 }]}>
                <Text style={[styles.text8, styles.bold]}>Special Operation</Text>

                <View style={[styles.flex, { flexDirection: "column" }, styles.aligncenter]}>
                  <Text style={[styles.text8, styles.bold]}>Emb & Embellishment :</Text>
                  <Text style={[styles.text8]}>Not Required</Text>
                </View>
              </View>


              {/* </View> */}

            </View>

          </View>


          {/* 3st row */}

          <View style={[styles.flex, styles.borderBlack, { gap: 25, paddingVertical: 5, paddingHorizontal: 10 }]}>
            <Text style={[styles.text8, styles.bold]}>More Info: </Text>
            <View >
              <Text style={[styles.text8]}>N/A</Text>
            </View>
          </View>


          {/* 4st row */}

          <View style={[styles.flex, { flexDirection: "row-reverse", gap: 25 }]}>

            <View style={[styles.borderbottomblack, styles.borderrightblack, styles.borderleftblack, { paddingVertical: 5, width: "40%", paddingHorizontal: 10, }]}>
              <Text style={[styles.text8]}>Washing - Care Label Instructions</Text>
              <Text style={[styles.text8]}>Machine Wash Cold With Like Colors, Tumble
                Dry Low, Use Only Non Chlorine Bleach, Do Not
                Iron Embalishment</Text>
            </View>



              {/* Signatures */}
            <View style={[styles.flex, { width: "60%", alignItems: "flex-end", justifyContent: "space-around" }]}>

              <View style={[styles.bordertopblack, { width: "30%" }]}>
                <Text style={[styles.text8]}>Prepared & Checked By</Text>
              </View>
              <View style={[styles.bordertopblack, { width: "30%" }]}>
                <Text style={[styles.text8]}>Factory Acknowledgement</Text>
              </View>
            </View>


          </View>








        </View>
      </View>

      {/* Page Footer */}
      {/* 
<View>
  <Text style={[styles.text7]}>ERP Solution Provider :www.itg.net.pk </Text>
</View> */}





    </Page>



    {/* Page 2 */}
    <Page size="A4" style={styles.body}>
      <View style={{marginBottom: 10}}>
      <Image
              src="../../assets/PI-logo.png"
              style={{ width: "150px", objectFit: "contain" }}
            />
        </View>
      <View>
        <Text style={[styles.text12, {lineHeight: 1.5}]}>1.  PO should be read carefully and confirm in 3 days from the date of issuance.</Text>
        <Text style={[styles.text12, {lineHeight: 1.5}]}>2.   Goods should be in good quality as per the buyer requirement, otherwise factory will be responsible for charge back.</Text>
        <Text style={[styles.text12, {lineHeight: 1.5}]}>3.   We should have Packing 24 hours before to our agreed delivery date.</Text>
        <Text style={[styles.text12, {lineHeight: 1.5}]}>4.  Packing should be as per Purchaser order and mix carton are not allowed.</Text>
        <Text style={[styles.text12, {lineHeight: 1.5}]}>5.  Factory will have to get approval of carton marking from merchandiser.</Text>
        <Text style={[styles.text12, {lineHeight: 1.5}]}>6.  3rd party should be done before ship date.</Text>
        <Text style={[styles.text12, {lineHeight: 1.5}]}>7.  3rd party will only applicable after our Progressions International passed.</Text>
        <Text style={[styles.text12, {lineHeight: 1.5}]}>8.  Tuesday goods should be on the port.</Text>
        <Text style={[styles.text12, {lineHeight: 1.5}]}>9.  If there is a space vacant in the container due to short quantity then factory will be responsible for dead space.</Text>
        <Text style={[styles.text12, {lineHeight: 1.5}]}>10. Delay penalties will be charged as under:</Text>
        <View>
          <View style={[ { width: "50%", marginLeft: "50" }]}>
          <View style={[styles.flex, {gap: 50}]}>
              <Text style={[styles.text12, {lineHeight: 1.5}]}>01 Week Delay</Text>
              <Text style={[styles.text12, {lineHeight: 1.5}]}>5% of Invoice value</Text>
            </View>
            <View style={[styles.flex, {gap: 50}]}>
              <Text style={[styles.text12, {lineHeight: 1.5}]}>02 Week Delay</Text>
              <Text style={[styles.text12, {lineHeight: 1.5}]}>8% of Invoice value</Text>
            </View>
            <View style={[styles.flex, {gap: 50}]}>
              <Text style={[styles.text12, {lineHeight: 1.5}]}>03 Week Delay</Text>
              <Text style={[styles.text12, {lineHeight: 1.5}]}>12% of Invoice value</Text>
            </View>
            <View style={[styles.flex, {gap: 75}]}>
              <Text style={[styles.text12, {lineHeight: 1.5}]}>Onwards</Text>
              <Text style={[styles.text12, {lineHeight: 1.5}]}>13% of Invoice value</Text>
            </View>
          </View>
        </View>
        <Text style={[styles.text12, {lineHeight: 1.5}]}>11. If any there will be any shortfall then 5% will be adjust from invoice value.</Text>
        <Text style={[styles.text12, {lineHeight: 1.5}]}>12. After all delays if customer requires AIR shipment then factory have to bear all the expenses.</Text>
        <Text style={[styles.text12, {lineHeight: 1.5}]}>13. After receiving Po's Factory should send filled P. Status every Friday.</Text>
      </View>

      <View style={[styles.flexbox, {marginTop: 100}]}>

<View style={[styles.bordertopblack]}>
  <Text style={[styles.text11]}>Prepared & Checked By</Text>
</View>
<View style={[styles.bordertopblack]}>
  <Text style={[styles.text11]}>Factory Acknowledgement</Text>
</View>
</View>
      
    </Page>
  </Document>
);





Font.register({
  family: 'Roboto',
  src: '../../assets/Fonts/Roboto-Regular.ttf'
});

Font.register({
  family: 'Roboto-Bold',
  src: '../../assets/Fonts/Roboto-Bold.ttf'
});



export default MyDocument;
