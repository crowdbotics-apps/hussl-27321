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
      <View style={styles.View_160_1503}>
        <Text style={styles.Text_160_1503}>Chat</Text>
      </View>
      <View style={styles.View_160_1504}>
        <Text style={styles.Text_160_1504}>Solutions</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/290f/757a/aaad00f7ce15d33156dfd529dc19d575"
        }}
        style={styles.ImageBackground_160_1505}
      />
      <TouchableOpacity
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("160_1466"))
        }
      >
        <View style={styles.View_160_1506}>
          <Text style={styles.Text_160_1506}>Husslrs</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.View_160_1507}>
        <View style={styles.View_I160_1507_50_1487}>
          <View style={styles.View_I160_1507_49_886} />
          <View style={styles.View_I160_1507_49_969}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e9cb/609b/e8152c070ac291883ed1631414d94974"
              }}
              style={styles.ImageBackground_I160_1507_49_965}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/af32/9404/4874c96fee24f14a0dd81e1ecb237381"
            }}
            style={styles.ImageBackground_I160_1507_49_983}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6d1f/77b8/8765ca735c591fd9e2c63766ef659709"
            }}
            style={styles.ImageBackground_I160_1507_49_999}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6f35/a5ff/3ea6dd5f3c06941106417f9e5177b39a"
            }}
            style={styles.ImageBackground_I160_1507_49_962}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0a2d/63fc/408fb85c4bb6e63c8f409553279af0b4"
          }}
          style={styles.ImageBackground_I160_1507_86_492}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/17f3/0005/ac4965571d1d7b6e0c34ca0117ff03a7"
        }}
        style={styles.ImageBackground_160_1508}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/52ae/e782/5059fa22c70b85aa255a9c7e5c2ed3b4"
        }}
        style={styles.ImageBackground_160_1509}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/52ae/e782/5059fa22c70b85aa255a9c7e5c2ed3b4"
        }}
        style={styles.ImageBackground_160_1510}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/52ae/e782/5059fa22c70b85aa255a9c7e5c2ed3b4"
        }}
        style={styles.ImageBackground_160_1511}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/52ae/e782/5059fa22c70b85aa255a9c7e5c2ed3b4"
        }}
        style={styles.ImageBackground_160_1512}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/52ae/e782/5059fa22c70b85aa255a9c7e5c2ed3b4"
        }}
        style={styles.ImageBackground_160_1513}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/52ae/e782/5059fa22c70b85aa255a9c7e5c2ed3b4"
        }}
        style={styles.ImageBackground_160_1514}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/52ae/e782/5059fa22c70b85aa255a9c7e5c2ed3b4"
        }}
        style={styles.ImageBackground_160_1515}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/52ae/e782/5059fa22c70b85aa255a9c7e5c2ed3b4"
        }}
        style={styles.ImageBackground_160_1516}
      />
      <TouchableOpacity
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("160_1538"))
        }
      >
        <View style={styles.View_160_1517}>
          <Text style={styles.Text_160_1517}>Diaclean</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.View_160_1518}>
        <Text style={styles.Text_160_1518}>Weather Or Not</Text>
      </View>
      <View style={styles.View_160_1519}>
        <Text style={styles.Text_160_1519}>Homies</Text>
      </View>
      <View style={styles.View_160_1520}>
        <Text style={styles.Text_160_1520}>Proudly Aussie</Text>
      </View>
      <View style={styles.View_160_1521}>
        <Text style={styles.Text_160_1521}>Canva</Text>
      </View>
      <View style={styles.View_160_1522}>
        <Text style={styles.Text_160_1522}>ClassPass</Text>
      </View>
      <View style={styles.View_160_1523}>
        <Text style={styles.Text_160_1523}>SpaceX</Text>
      </View>
      <View style={styles.View_160_1524}>
        <Text style={styles.Text_160_1524}>Neuralink</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7cc2/4a5a/84f486e26a1dd3a615fd99dc1652d5c1"
        }}
        style={styles.ImageBackground_160_1525}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7f12/a14c/72f53582ff0653fb1ed82b3fe88a8427"
        }}
        style={styles.ImageBackground_160_1526}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/16a5/4a05/e67a887dccc5b59f46c1a699041e1f6e"
        }}
        style={styles.ImageBackground_160_1527}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/27f3/b097/8c74639622346669611bbca587de1d00"
        }}
        style={styles.ImageBackground_160_1528}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5df1/4d95/98ba10e78c1de6ed99d096408710c704"
        }}
        style={styles.ImageBackground_160_1529}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5eab/6a17/757604ff6fa000a94166758d929f9a0e"
        }}
        style={styles.ImageBackground_160_1530}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1ac3/5a34/87150dd1f073092ef0979e376365a9c4"
        }}
        style={styles.ImageBackground_160_1531}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4595/cfc1/54ce526c7af57fe33ebb5ccf8cc60e76"
        }}
        style={styles.ImageBackground_160_1532}
      />
      <View style={styles.View_160_1533}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/46f9/2ebc/edc1b9910f926666c10e0c825d675be4"
          }}
          style={styles.ImageBackground_160_1534}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8b8c/a746/a1918619eaad079411acd9ef2f640b98"
          }}
          style={styles.ImageBackground_160_1535}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("110.92896174863387%") },
  View_160_1503: {
    width: wp("25.333333333333336%"),
    minWidth: wp("25.333333333333336%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.466666666666668%"),
    top: hp("12.158469945355192%")
  },
  Text_160_1503: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 29,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.36,
    textTransform: "none"
  },
  View_160_1504: {
    width: wp("18.933333333333334%"),
    minWidth: wp("18.933333333333334%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.333333333333336%"),
    top: hp("20.62841530054645%")
  },
  Text_160_1504: {
    color: "rgba(255, 196, 51, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.14,
    textTransform: "none"
  },
  ImageBackground_160_1505: {
    width: wp("18.933333333333334%"),
    height: hp("0%"),
    top: hp("23.08743169398907%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.333333333333336%")
  },
  View_160_1506: {
    width: wp("14.666666666666666%"),
    minWidth: wp("14.666666666666666%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.466666666666668%"),
    top: hp("20.62841530054645%")
  },
  Text_160_1506: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.14,
    textTransform: "none"
  },
  View_160_1507: {
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
  View_I160_1507_50_1487: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("11.065573770491802%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I160_1507_49_886: {
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
  View_I160_1507_49_969: {
    width: wp("7.542857360839844%"),
    height: hp("3.864168729938445%"),
    top: hp("3.41530054644808%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.13333333333333%")
  },
  ImageBackground_I160_1507_49_965: {
    width: wp("7.542857360839844%"),
    height: hp("3.864168729938445%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I160_1507_49_983: {
    width: wp("6.933333333333333%"),
    height: hp("3.5103552979849724%"),
    top: hp("3.551912568306008%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65.60000000000001%")
  },
  ImageBackground_I160_1507_49_999: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("3.6885245901639223%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.26666666666667%")
  },
  ImageBackground_I160_1507_49_962: {
    width: wp("7.1111109415690095%"),
    height: hp("3.278688524590164%"),
    top: hp("3.6885245901639223%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.266666666666666%")
  },
  ImageBackground_I160_1507_86_492: {
    flexGrow: 1,
    width: wp("6.933333333333333%"),
    height: hp("3.196721259362059%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.200000000000003%"),
    top: hp("3.6885245901639223%")
  },
  ImageBackground_160_1508: {
    width: wp("1.0666666666666667%"),
    minWidth: wp("1.0666666666666667%"),
    height: hp("0.546448087431694%"),
    minHeight: hp("0.546448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68.8%"),
    top: hp("107.78688524590163%")
  },
  ImageBackground_160_1509: {
    width: wp("89.33333333333333%"),
    height: hp("0%"),
    top: hp("35.51912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333334%")
  },
  ImageBackground_160_1510: {
    width: wp("89.33333333333333%"),
    height: hp("0%"),
    top: hp("44.26229508196721%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333334%")
  },
  ImageBackground_160_1511: {
    width: wp("89.33333333333333%"),
    height: hp("0%"),
    top: hp("53.00546448087432%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333334%")
  },
  ImageBackground_160_1512: {
    width: wp("89.33333333333333%"),
    height: hp("0%"),
    top: hp("87.97814207650273%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333334%")
  },
  ImageBackground_160_1513: {
    width: wp("89.33333333333333%"),
    height: hp("0%"),
    top: hp("96.72131147540983%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333334%")
  },
  ImageBackground_160_1514: {
    width: wp("89.33333333333333%"),
    height: hp("0%"),
    top: hp("70.49180327868852%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333334%")
  },
  ImageBackground_160_1515: {
    width: wp("89.33333333333333%"),
    height: hp("0%"),
    top: hp("79.23497267759562%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333334%")
  },
  ImageBackground_160_1516: {
    width: wp("89.33333333333333%"),
    height: hp("0%"),
    top: hp("61.74863387978142%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333334%")
  },
  View_160_1517: {
    width: wp("15.466666666666667%"),
    minWidth: wp("15.466666666666667%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.6%"),
    top: hp("31.420765027322407%")
  },
  Text_160_1517: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.12,
    textTransform: "none"
  },
  View_160_1518: {
    width: wp("28.26666666666667%"),
    minWidth: wp("28.26666666666667%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.6%"),
    top: hp("39.34426229508197%")
  },
  Text_160_1518: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.12,
    textTransform: "none"
  },
  View_160_1519: {
    width: wp("13.333333333333334%"),
    minWidth: wp("13.333333333333334%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.6%"),
    top: hp("48.08743169398907%")
  },
  Text_160_1519: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.12,
    textTransform: "none"
  },
  View_160_1520: {
    width: wp("25.866666666666667%"),
    minWidth: wp("25.866666666666667%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.6%"),
    top: hp("56.69398907103825%")
  },
  Text_160_1520: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.12,
    textTransform: "none"
  },
  View_160_1521: {
    width: wp("11.466666666666667%"),
    minWidth: wp("11.466666666666667%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.6%"),
    top: hp("65.02732240437157%")
  },
  Text_160_1521: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.12,
    textTransform: "none"
  },
  View_160_1522: {
    width: wp("17.066666666666666%"),
    minWidth: wp("17.066666666666666%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.6%"),
    top: hp("74.04371584699454%")
  },
  Text_160_1522: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.12,
    textTransform: "none"
  },
  View_160_1523: {
    width: wp("13.600000000000001%"),
    minWidth: wp("13.600000000000001%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.6%"),
    top: hp("82.65027322404372%")
  },
  Text_160_1523: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.12,
    textTransform: "none"
  },
  View_160_1524: {
    width: wp("17.333333333333336%"),
    minWidth: wp("17.333333333333336%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.6%"),
    top: hp("91.80327868852459%")
  },
  Text_160_1524: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.12,
    textTransform: "none"
  },
  ImageBackground_160_1525: {
    width: wp("8.533333333333333%"),
    minWidth: wp("8.533333333333333%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.866666666666667%"),
    top: hp("30.191256830601095%")
  },
  ImageBackground_160_1526: {
    width: wp("8.533333333333333%"),
    minWidth: wp("8.533333333333333%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.866666666666667%"),
    top: hp("38.114754098360656%")
  },
  ImageBackground_160_1527: {
    width: wp("8.533333333333333%"),
    minWidth: wp("8.533333333333333%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.866666666666667%"),
    top: hp("46.85792349726776%")
  },
  ImageBackground_160_1528: {
    width: wp("8.533333333333333%"),
    minWidth: wp("8.533333333333333%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.866666666666667%"),
    top: hp("55.46448087431693%")
  },
  ImageBackground_160_1529: {
    width: wp("8.533333333333333%"),
    minWidth: wp("8.533333333333333%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.866666666666667%"),
    top: hp("63.79781420765027%")
  },
  ImageBackground_160_1530: {
    width: wp("8.533333333333333%"),
    minWidth: wp("8.533333333333333%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.866666666666667%"),
    top: hp("72.81420765027322%")
  },
  ImageBackground_160_1531: {
    width: wp("8.533333333333333%"),
    minWidth: wp("8.533333333333333%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.866666666666667%"),
    top: hp("81.4207650273224%")
  },
  ImageBackground_160_1532: {
    width: wp("8.533333333333333%"),
    minWidth: wp("8.533333333333333%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.866666666666667%"),
    top: hp("90.57377049180327%")
  },
  View_160_1533: {
    width: wp("13.333333333333334%"),
    minWidth: wp("13.333333333333334%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80.53333333333333%"),
    top: hp("90.57377049180327%")
  },
  ImageBackground_160_1534: {
    width: wp("13.333333333333334%"),
    minWidth: wp("13.333333333333334%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_160_1535: {
    width: wp("4.266666666666667%"),
    height: hp("2.185792349726776%"),
    top: hp("2.3224043715847102%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.533333333333331%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
