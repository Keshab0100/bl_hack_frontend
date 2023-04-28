import React from "react";
import { Page, Text, View, Document, StyleSheet, Link } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#E4E4E4",
    padding: 20,
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  timeRange: {
    fontSize: 12,
    marginBottom: 5,
  },
  description: {
    fontSize: 16,
    marginBottom: 10,
  },
});

function formatDate(date) {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return date.toLocaleDateString(undefined, options);
}

function MyDocument({ data }) {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {data.map((item) => (
          <View key={item._id} style={styles.section}>
            <Text style={styles.title}>{item.diseaseName}</Text>
            <Text style={styles.timeRange}>
              {/* {formatDate(new Date(item.start))} -{" "} */}
              {formatDate(new Date(item.date))}
            </Text>
            <Text style={styles.description}>{item.description}</Text>
            <Link style={styles.link} src={item.file}>
            <Text>Prescription Link</Text>
          </Link>
          </View>
        ))}
      </Page>
    </Document>
  );
}

export default MyDocument;
