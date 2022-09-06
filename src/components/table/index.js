import React from "react";
import { styles } from "./styles";
import { View, Text, ScrollView } from "react-native";
import { Table, Row, Rows } from "react-native-table-component";
import { EditIcon, DeleteIcon } from "../svgs/svgs";

const HeadTable = ["Product", "Product Name", "Update", "Delete"];
const DataTable = [
  [
    <Text style={{ alignSelf: "center", marginHorizontal:5 }}>
      Head-Lighttttttttttttttttttttttttttttttttttttttttt
    </Text>,
    <Text style={{ alignSelf: "center" }}>Head-Light</Text>,
    <View style={{ justifyContent: "center", alignItems: "center", paddingTop:12 }}>
      <EditIcon width={26} height={26} color="#000000" />
    </View>,
    <View style={{ alignItems: "center" }}>
      <DeleteIcon width={24} height={46} />
    </View>,
  ],
];

export default function TableComp() {
  return (
    <View style={styles.container}>
      <Table borderStyle={styles.borderStyle}>
        <Row
          data={HeadTable}
          style={styles.HeadStyle}
          widthArr={[118, 102, 60, 58.2]}
          textStyle={styles.itemsHeadingRowText}
        />
        <ScrollView style={{ ...styles.scrollViewHeight, ...styles.fullWidth }}>
          <Table borderStyle={styles.borderStyle} style={{...styles.fullWidth}}>
            <Rows
              data={DataTable}
              style={styles.rows}
              textStyle={styles.itemsRowText}
              widthArr={[121, 102, 60, 60.7]}
            />
            <Rows
              data={DataTable}
              style={styles.rows}
              textStyle={styles.itemsRowText}
              widthArr={[121, 102, 60, 60.7]}
            />
            <Rows
              data={DataTable}
              style={styles.rows}
              textStyle={styles.itemsRowText}
              widthArr={[121, 102, 60, 60.7]}
            />
            <Rows
              data={DataTable}
              style={styles.rows}
              textStyle={styles.itemsRowText}
              widthArr={[121, 102, 60, 60.7]}
            />
          </Table>
        </ScrollView>
      </Table>
    </View>
  );
}
