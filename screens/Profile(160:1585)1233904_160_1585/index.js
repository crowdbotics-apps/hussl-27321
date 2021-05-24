import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "../../modules/utils"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.View_2} />
      <View style={styles.View_160_1586} />
      <View style={styles.View_160_1587}>
        <Text style={styles.Text_160_1587}>John Tan</Text>
      </View>
      <View style={styles.View_160_1588}>
        <Text style={styles.Text_160_1588}>points</Text>
      </View>
      <View style={styles.View_160_1589}>
        <Text style={styles.Text_160_1589}>
          Points earned in September 2020
        </Text>
      </View>
      <View style={styles.View_160_1590}>
        <Text style={styles.Text_160_1590}>+30</Text>
      </View>
      <View style={styles.View_160_1591}>
        <Text style={styles.Text_160_1591}>My Contributions</Text>
      </View>
      <View style={styles.View_160_1592}>
        <Text style={styles.Text_160_1592}>Updates</Text>
      </View>
      <View style={styles.View_160_1593}>
        <Text style={styles.Text_160_1593}>Summary</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7dd4/297b/c5f800e1abb10640148322509456bcba"
        }}
        style={styles.ImageBackground_160_1594}
      />
      <View style={styles.View_160_1596}>
        <View style={styles.View_I160_1596_50_1487}>
          <View style={styles.View_I160_1596_49_886} />
          <View style={styles.View_I160_1596_49_969}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e9cb/609b/e8152c070ac291883ed1631414d94974"
              }}
              style={styles.ImageBackground_I160_1596_49_965}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a205/7b69/85cc861e396345e8ad4f92379d8c9935"
            }}
            style={styles.ImageBackground_I160_1596_49_983}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7133/adfe/41d2f23031eb44d769b9659655432c88"
            }}
            style={styles.ImageBackground_I160_1596_49_999}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6f35/a5ff/3ea6dd5f3c06941106417f9e5177b39a"
            }}
            style={styles.ImageBackground_I160_1596_49_962}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0a2d/63fc/408fb85c4bb6e63c8f409553279af0b4"
          }}
          style={styles.ImageBackground_I160_1596_86_492}
        />
      </View>
      <View style={styles.View_160_1597}>
        <Text style={styles.Text_160_1597}>+10</Text>
      </View>
      <View style={styles.View_160_1598}>
        <Text style={styles.Text_160_1598}>Points</Text>
      </View>
      <View style={styles.View_160_1599}>
        <Text style={styles.Text_160_1599}>Item</Text>
      </View>
      <View style={styles.View_160_1600}>
        <Text style={styles.Text_160_1600}>Shared a problem</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/52ae/e782/5059fa22c70b85aa255a9c7e5c2ed3b4"
        }}
        style={styles.ImageBackground_160_1601}
      />
      <View style={styles.View_160_1602}>
        <Text style={styles.Text_160_1602}>+10</Text>
      </View>
      <View style={styles.View_160_1603}>
        <Text style={styles.Text_160_1603}>Submitted a solution</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/52ae/e782/5059fa22c70b85aa255a9c7e5c2ed3b4"
        }}
        style={styles.ImageBackground_160_1604}
      />
      <View style={styles.View_160_1605}>
        <Text style={styles.Text_160_1605}>+5</Text>
      </View>
      <View style={styles.View_160_1606}>
        <Text style={styles.Text_160_1606}>
          5 upvotes for Diaclean solution
        </Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/52ae/e782/5059fa22c70b85aa255a9c7e5c2ed3b4"
        }}
        style={styles.ImageBackground_160_1607}
      />
      <View style={styles.View_160_1608}>
        <Text style={styles.Text_160_1608}>+5</Text>
      </View>
      <View style={styles.View_160_1609}>
        <Text style={styles.Text_160_1609}>5 upvotes for Diaclean pitch</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/52ae/e782/5059fa22c70b85aa255a9c7e5c2ed3b4"
        }}
        style={styles.ImageBackground_160_1610}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/17f3/0005/ac4965571d1d7b6e0c34ca0117ff03a7"
        }}
        style={styles.ImageBackground_160_1611}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d6a8/c6bf/3cec8f44916216343da131249fedf16b"
        }}
        style={styles.ImageBackground_160_1612}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("110.92896174863387%") },
  View_160_1586: {
    width: wp("85.86666666666667%"),
    minWidth: wp("85.86666666666667%"),
    height: hp("15.300546448087433%"),
    minHeight: hp("15.300546448087433%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.199999999999999%"),
    top: hp("28.825136612021858%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_160_1587: {
    width: wp("47.199999999999996%"),
    minWidth: wp("47.199999999999996%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.733333333333333%"),
    top: hp("12.158469945355192%")
  },
  Text_160_1587: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 29,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.36,
    textTransform: "none"
  },
  View_160_1588: {
    width: wp("14.399999999999999%"),
    minWidth: wp("14.399999999999999%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.13333333333333%"),
    top: hp("37.97814207650273%")
  },
  Text_160_1588: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_160_1589: {
    width: wp("47.199999999999996%"),
    minWidth: wp("47.199999999999996%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.466666666666667%"),
    top: hp("31.693989071038253%")
  },
  Text_160_1589: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_160_1590: {
    width: wp("20.8%"),
    minWidth: wp("20.8%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67.46666666666667%"),
    top: hp("32.51366120218579%")
  },
  Text_160_1590: {
    color: "rgba(255, 196, 51, 1)",
    fontSize: 29,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.36,
    textTransform: "none"
  },
  View_160_1591: {
    width: wp("35.199999999999996%"),
    top: hp("20.62841530054645%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.13333333333333%")
  },
  Text_160_1591: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.14,
    textTransform: "none"
  },
  View_160_1592: {
    width: wp("17.333333333333336%"),
    top: hp("20.62841530054645%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.13333333333333%")
  },
  Text_160_1592: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.14,
    textTransform: "none"
  },
  View_160_1593: {
    width: wp("19.733333333333334%"),
    top: hp("20.62841530054645%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.533333333333333%")
  },
  Text_160_1593: {
    color: "rgba(255, 196, 51, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.14,
    textTransform: "none"
  },
  ImageBackground_160_1594: {
    width: wp("19.2%"),
    height: hp("8.598961785487842e-7%"),
    top: hp("23.08743169398907%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.799999999999999%")
  },
  View_160_1596: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("11.065573770491802%"),
    minHeight: hp("11.065573770491802%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("99.86338797814209%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I160_1596_50_1487: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("11.065573770491802%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I160_1596_49_886: {
    width: wp("100%"),
    height: hp("11.065573770491802%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_I160_1596_49_969: {
    width: wp("7.542857360839844%"),
    height: hp("3.864168729938445%"),
    top: hp("3.41530054644808%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.13333333333333%")
  },
  ImageBackground_I160_1596_49_965: {
    width: wp("7.542857360839844%"),
    height: hp("3.864168729938445%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I160_1596_49_983: {
    width: wp("6.933333333333333%"),
    height: hp("3.5103552979849724%"),
    top: hp("3.551912568306008%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65.60000000000001%")
  },
  ImageBackground_I160_1596_49_999: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("3.6885245901639223%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.26666666666667%")
  },
  ImageBackground_I160_1596_49_962: {
    width: wp("7.1111109415690095%"),
    height: hp("3.278688524590164%"),
    top: hp("3.6885245901639223%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.266666666666666%")
  },
  ImageBackground_I160_1596_86_492: {
    flexGrow: 1,
    width: wp("6.933333333333333%"),
    height: hp("3.196721259362059%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.200000000000003%"),
    top: hp("3.6885245901639223%")
  },
  View_160_1597: {
    width: wp("5.6000000000000005%"),
    minWidth: wp("5.6000000000000005%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81.06666666666666%"),
    top: hp("56.01092896174863%")
  },
  Text_160_1597: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.12,
    textTransform: "none"
  },
  View_160_1598: {
    width: wp("9.6%"),
    minWidth: wp("9.6%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.93333333333334%"),
    top: hp("51.63934426229508%")
  },
  Text_160_1598: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.12,
    textTransform: "none"
  },
  View_160_1599: {
    width: wp("6.933333333333333%"),
    minWidth: wp("6.933333333333333%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.733333333333333%"),
    top: hp("51.63934426229508%")
  },
  Text_160_1599: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.12,
    textTransform: "none"
  },
  View_160_1600: {
    width: wp("27.46666666666667%"),
    minWidth: wp("27.46666666666667%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.199999999999999%"),
    top: hp("56.01092896174863%")
  },
  Text_160_1600: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.12,
    textTransform: "none"
  },
  ImageBackground_160_1601: {
    width: wp("89.33333333333333%"),
    height: hp("0%"),
    top: hp("60.10928961748634%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333334%")
  },
  View_160_1602: {
    width: wp("5.6000000000000005%"),
    minWidth: wp("5.6000000000000005%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81.06666666666666%"),
    top: hp("62.02185792349727%")
  },
  Text_160_1602: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.12,
    textTransform: "none"
  },
  View_160_1603: {
    width: wp("31.733333333333334%"),
    minWidth: wp("31.733333333333334%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.199999999999999%"),
    top: hp("62.02185792349727%")
  },
  Text_160_1603: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.12,
    textTransform: "none"
  },
  ImageBackground_160_1604: {
    width: wp("89.33333333333333%"),
    height: hp("0%"),
    top: hp("66.12021857923497%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333334%")
  },
  View_160_1605: {
    width: wp("3.733333333333334%"),
    minWidth: wp("3.733333333333334%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82.13333333333334%"),
    top: hp("68.30601092896174%")
  },
  Text_160_1605: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.12,
    textTransform: "none"
  },
  View_160_1606: {
    width: wp("47.46666666666667%"),
    minWidth: wp("47.46666666666667%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.199999999999999%"),
    top: hp("68.30601092896174%")
  },
  Text_160_1606: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.12,
    textTransform: "none"
  },
  ImageBackground_160_1607: {
    width: wp("89.33333333333333%"),
    height: hp("0%"),
    top: hp("72.40437158469946%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333334%")
  },
  View_160_1608: {
    width: wp("3.733333333333334%"),
    minWidth: wp("3.733333333333334%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82.13333333333334%"),
    top: hp("74.59016393442623%")
  },
  Text_160_1608: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.12,
    textTransform: "none"
  },
  View_160_1609: {
    width: wp("42.66666666666667%"),
    minWidth: wp("42.66666666666667%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.199999999999999%"),
    top: hp("74.59016393442623%")
  },
  Text_160_1609: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.12,
    textTransform: "none"
  },
  ImageBackground_160_1610: {
    width: wp("89.33333333333333%"),
    height: hp("0%"),
    top: hp("78.68852459016394%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333334%")
  },
  ImageBackground_160_1611: {
    width: wp("1.0666666666666667%"),
    minWidth: wp("1.0666666666666667%"),
    height: hp("0.546448087431694%"),
    minHeight: hp("0.546448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86.93333333333332%"),
    top: hp("107.78688524590163%")
  },
  ImageBackground_160_1612: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("6.147540983606557%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81.06666666666666%"),
    top: hp("10.245901639344263%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
