import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { Font, Page, Text, View, Document, StyleSheet, Image, Svg, Line, PDFViewer, Link } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    view: {
        width: '100%',
        height: '800px'
    },
    body: {
        paddingTop: 20,
        paddingBottom: 20,
        paddingHorizontal: 20
    },
    positionReletive: {
        position: 'relative'
    },
    positionAbsolute: {
        position: 'absolute'
    },
    image: {
        maxHeight: '110px'
    },
    checkbox: {
        height: '15px',
        width: '15px'
    },
    checkbox2: {
        height: '10px',
        width: '10px'
    },
    flexbox: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    box: {
        paddingHorizontal: 5
    },
    box10: {
        width: '10%',
    },
    box20: {
        width: '20%',
    },
    box30: {
        width: '30%',
    },
    box40: {
        width: '40%',
    },
    box50: {
        width: '50%',
    },
    box60: {
        width: '60%',
    },
    box70: {
        width: '70%',
    },
    box80: {
        width: '80%',
    },
    box90: {
        width: '90%',
    },
    box100: {
        width: '100%',
    },
    box5: {
        width: '5%',
    },
    box15: {
        width: '15%',
    },
    box25: {
        width: '25%',
    },
    box35: {
        width: '35%',
    },
    box45: {
        width: '45%',
    },
    box55: {
        width: '55%',
    },
    box65: {
        width: '65%',
    },
    box75: {
        width: '75%',
    },
    box85: {
        width: '85%',
    },
    box95: {
        width: '95%',
    },
    box33: {
        width: '33.33%',
    },
    box13: {
        width: '13.33%',
    },
    box26: {
        width: '26.66%',
    },
    box36: {
        width: '36.66%',
    },
    box53: {
        width: '53.34%',
    },
    box83: {
        width: '83.34%',
    },
    box16: {
        width: '16.66%',
    },
    box22: {
        width: '22%',
    },
    box48: {
        width: '48%',
    },
    borderright: {
        borderRight: '1px solid #e1e1e1',
    },
    borderleft: {
        borderLeft: ' 1px solid #e1e1e1'
    },
    bordertop: {
        borderTop: ' 1px solid #e1e1e1'
    },
    borderbottom: {
        borderBottom: ' 1px solid #e1e1e1'
    },
    borderrightblack: {
        borderRight: '1px solid #000',
    },
    borderleftblack: {
        borderLeft: ' 1px solid #000'
    },
    bordertopblack: {
        borderTop: ' 1px solid #000'
    },
    borderbottomblack: {
        borderBottom: ' 1px solid #000'
    },
    borderright2black: {
        borderRight: '1px solid #000',
    },
    borderleft2black: {
        borderLeft: ' 1px solid #000'
    },
    bordertop2black: {
        borderTop: ' 1px solid #000'
    },
    borderbottom2black: {
        borderBottom: ' 1px solid #000'
    },
    border: {
        border: '1px solid #e1e1e1'
    },
    border2: {
        border: '2px solid #e1e1e1'
    },
    borderBlack: {
        border: '1px solid #000'
    },
    border2Black: {
        border: '2px solid #000'
    },
    borderRadius: {
        borderRadius: '50%'
    },
    bold: {
        fontWeight: 'bold',
        fontFamily: 'Roboto-Bold',
    },
    text6: {
        fontSize: 6,
        lineHeight: 1.2,
        fontFamily: 'Roboto',
    },
    text7: {
        fontSize: 7,
        lineHeight: 1.2,
        fontFamily: 'Roboto',
    },
    text8: {
        fontSize: 8,
        lineHeight: 1.2,
        fontFamily: 'Roboto',
    },
    text9: {
        fontSize: 9,
        lineHeight: 1.2,
        fontFamily: 'Roboto'
    },
    text10: {
        fontSize: 10,
        lineHeight: 1.2,
        fontFamily: 'Roboto',
    },
    text11: {
        fontSize: 11,
        lineHeight: 1.2,
        fontFamily: 'Roboto',
        paddingLeft: 3,
    },
    text12: {
        fontSize: 12,
        lineHeight: 1.2,
        fontFamily: 'Roboto'
    },
    text13: {
        fontSize: 13,
        lineHeight: 1.2,
        fontFamily: 'Roboto'
    },
    text14: {
        fontSize: 14,
        lineHeight: 1.2,
        fontFamily: 'Roboto'
    },
    text15: {
        fontSize: 15,
        lineHeight: 1.2,
        fontFamily: 'Roboto'
    },
    text16: {
        fontSize: 16,
        lineHeight: 1.2,
        fontFamily: 'Roboto'
    },
    uppercase: {
        textTransform: 'uppercase'
    },
    padding1: {
        padding: 1
    },
    padding2: {
        padding: 2
    },
    padding3: {
        padding: 3
    },
    padding4: {
        padding: 4
    },
    padding5: {
        padding: 5
    },
    padding6: {
        padding: 6
    },
    paddingtop: {
        paddingTop: 0
    },
    paddingbottom: {
        paddingBottom: 0
    },
    paddingleft: {
        paddingLeft: 0
    },
    paddingright: {
        paddingRight: 0
    },
    gridContainer: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '10px',
        padding: '10px',
    },
    center: {
        textAlign: 'center',
    },
    justify: {
        textAlign: 'justify',
    },
    flex: {
        display: 'flex',
        flexDirection: 'row'
    },
    flexwrap: {
        flexWrap: 'wrap'
    },
    aligncenter: {
        alignItems: 'center'
    },
    justifycenter: {
        justifyContent: 'center'
    },
    bgGrey: {
        backgroundColor: '#e1e1e1'
    },
    title: {
        fontSize: 22,
        textAlign: 'center',
        fontFamily: 'Roboto-Bold'
    },
    title2: {
        fontSize: 16,
        textAlign: 'center',
        fontFamily: 'Roboto-Bold'
    },
    title3: {
        fontSize: 14,
        textAlign: 'center',
        fontFamily: 'Roboto-Bold'
    },
    paddingY: {
        paddingVertical: 2
    },
    paddingY5: {
        paddingVertical: 5
    },
    paddingY3: {
        paddingVertical: 3
    },
    marginY: {
        marginVertical: 2
    },
    marginY5: {
        marginVertical: 5
    },
    marginY10: {
        marginVertical: 10
    },
    bgGreen: {
        backgroundColor: '#D6F1E8'
    },
    textWhite: {
        color: '#fff'
    },
    square: {
        width: '80px',
        height: '80px',
    },
    rectangle: {
        width: '120px',
        height: '20px',
    },
    underline: {
        textDecoration: 'underline'
    }
});

const formatDate = (inputString) => {
    const date = new Date(inputString);

    // Extract the day, month, and year
    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'short' }); // Get the short month name
    const year = date.getFullYear();

    const formattedDay = day < 10 ? `0${day}` : day;

    return `${formattedDay}-${month}-${year}`;
};

const calculateSum = (detailList, keyName) =>
    detailList.reduce((acc, item) => acc + (parseFloat(item?.[keyName]) || 0), 0);

const sumCriticalMajorMinor = (data) => (
    data.reduce((acc, obj) => {
        const critical = Number(obj.Critical) || 0;
        const major = Number(obj.Major) || 0;
        const minor = Number(obj.Minor) || 0;
        return acc + critical + major + minor;
    }, 0)
);

const sumOfDefects = (data) => {
    const totals = data.reduce((acc, obj) => {
        const critical = Number(obj.Critical) || 0;
        const major = Number(obj.Major) || 0;
        const minor = Number(obj.Minor) || 0;
        acc.critical += critical;
        acc.major += major;
        acc.minor += minor;
        return acc;
    }, { critical: 0, major: 0, minor: 0 });

    return totals;
};

export const InspectionReportPDF = ({ MasterData, DefectsData, DetailData, MiscellaneousImages, QAData, CurrentData }) => (
    <>
        <PDFViewer style={styles.view}>
            <Document producer='Interactive Technologies Gateway' creator='Progression International' author='Progression International'>
                <Page style={styles.body} orientation='portrait'>
                    <View style={[styles.flex, styles.aligncenter, styles.box100, { justifyContent: 'space-between' }]}>
                        <View style={[styles.flex, styles.aligncenter, styles.justifycenter, { overflow: 'hidden' }]}>
                            <Image src='/assets/images/PI-logo.png' style={{ width: '150px', objectFit: 'contain' }} />
                        </View>
                        <View style={[styles.flexbox]}>
                            <Text style={[styles.text14, styles.bold, styles.underline, { textAlign: 'center' }]}>INSPECTION REPORT</Text>
                        </View>
                        <View style={[styles.borderBlack, styles.rectangle, { display: 'flex', justifyContent: 'center', alignItems: 'center' }]}>
                            <Text style={[styles.text14, styles.bold, {textTransform: 'uppercase'}]}>{MasterData?.InspNo}</Text>
                        </View>
                    </View>

                    <View style={[styles.flex, styles.box100, styles.marginY10, { justifyContent: 'center' }]}>
                        <View style={[styles.box60, styles.flex, styles.aligncenter, { justifyContent: 'space-between' }]}>
                            <View style={[styles.box20, styles.flex, styles.flexwrap, styles.aligncenter]}>
                                <Image style={[styles.box30, styles.checkbox2]} src={MasterData?.InspectionStatus === 'Inline' ? '/assets/images/checkbox-checked.png' : '/assets/images/checkbox-empty.png'} />
                                <Text style={[styles.box70, styles.text8, { paddingLeft: 4 }]}>INLINE</Text>
                            </View>
                            <View style={[styles.box25, styles.flex, styles.flexwrap, styles.aligncenter]}>
                                <Image style={[styles.box30, styles.checkbox2]} src={MasterData?.InspectionStatus === 'Intermediate' ? '/assets/images/checkbox-checked.png' : '/assets/images/checkbox-empty.png'} />
                                <Text style={[styles.box80, styles.text8, { paddingLeft: 4 }]}>INTERMEDIATE</Text>
                            </View>
                            <View style={[styles.box20, styles.flex, styles.flexwrap, styles.aligncenter]}>
                                <Image style={[styles.box30, styles.checkbox2]} src={MasterData?.InspectionStatus === 'Pre-Final' ? '/assets/images/checkbox-checked.png' : '/assets/images/checkbox-empty.png'} />
                                <Text style={[styles.box70, styles.text8, { paddingLeft: 4 }]}>PRE-FINAL</Text>
                            </View>
                            <View style={[styles.box20, styles.flex, styles.flexwrap, styles.aligncenter]}>
                                <Image style={[styles.box30, styles.checkbox2]} src={MasterData?.InspectionStatus === 'Final' ? '/assets/images/checkbox-checked.png' : '/assets/images/checkbox-empty.png'} />
                                <Text style={[styles.box70, styles.text8, { paddingLeft: 4 }]}>FINAL</Text>
                            </View>
                        </View>
                    </View>

                    <View style={[styles.box100, styles.marginY10, { padding: 8 }]}>
                        <View style={[styles.flex, styles.box100, styles.paddingY3, { justifyContent: 'space-between' }]}>
                            <View style={[styles.flex, styles.box45]}>
                                <Text style={[styles.box40, styles.text9, styles.bold]}>Q.A. NAME:</Text>
                                <Text style={[styles.box60, styles.text9, styles.borderbottom, { marginLeft: 3 }]}>{QAData?.find(obj => obj.UserId === MasterData?.InspectedByID)?.UserName}</Text>
                            </View>
                            <View style={[styles.flex, styles.box45]}>
                                <Text style={[styles.box40, styles.text9, styles.bold]}>SHIPMENT MODE:</Text>
                                <Text style={[styles.box60, styles.text9, styles.borderbottom, { marginLeft: 3 }]}>{MasterData?.ShipMode}</Text>
                            </View>
                        </View>

                        <View style={[styles.flex, styles.box100, styles.paddingY3, { justifyContent: 'space-between' }]}>
                            <View style={[styles.flex, styles.box45]}>
                                <Text style={[styles.box40, styles.text9, styles.bold]}>MERCHANDISER:</Text>
                                <Text style={[styles.box60, styles.text9, styles.borderbottom, { marginLeft: 3 }]} />
                            </View>
                            <View style={[styles.flex, styles.box45]}>
                                <Text style={[styles.box40, styles.text9, styles.bold]}>AQL SYSTEM:</Text>
                                <Text style={[styles.box60, styles.text9, styles.borderbottom, { marginLeft: 3 }]} />
                            </View>
                        </View>

                        <View style={[styles.flex, styles.box100, styles.paddingY3, { justifyContent: 'space-between' }]}>
                            <View style={[styles.flex, styles.box45]}>
                                <Text style={[styles.box40, styles.text9, styles.bold]}>P.O. #:</Text>
                                <Text style={[styles.box60, styles.text9, styles.borderbottom, { marginLeft: 3 }]}>{CurrentData?.PONO}</Text>
                            </View>
                            <View style={[styles.flex, styles.box45]}>
                                <Text style={[styles.box40, styles.text9, styles.bold]}>TOTAL INSP. QTY :</Text>
                                <Text style={[styles.box60, styles.text9, styles.borderbottom, { marginLeft: 3 }]}>{MasterData?.SampleSize}</Text>
                            </View>
                        </View>

                        <View style={[styles.flex, styles.box100, styles.paddingY3, { justifyContent: 'space-between' }]}>
                            <View style={[styles.flex, styles.box45]}>
                                <Text style={[styles.box40, styles.text9, styles.bold]}>STYLE NO:</Text>
                                <Text style={[styles.box60, styles.text9, styles.borderbottom, { marginLeft: 3 }]}>{DetailData[0]?.StyleNo}</Text>
                            </View>
                            <View style={[styles.flex, styles.box45]}>
                                <Text style={[styles.box40, styles.text9, styles.bold]}>INSP. DATE :</Text>
                                <Text style={[styles.box60, styles.text9, styles.borderbottom, { marginLeft: 3 }]}>{formatDate(MasterData?.ShipmentDate)}</Text>
                            </View>
                        </View>

                        <View style={[styles.flex, styles.box100, styles.paddingY3, { justifyContent: 'space-between' }]}>
                            <View style={[styles.flex, styles.box45]}>
                                <Text style={[styles.box40, styles.text9, styles.bold]}>VENDOR:</Text>
                                <Text style={[styles.box60, styles.text9, styles.borderbottom, { marginLeft: 3 }]}>{MasterData?.VenderName}</Text>
                            </View>
                            <View style={[styles.flex, styles.box45]}>
                                <Text style={[styles.box40, styles.text9, styles.bold]}>INSPECTION STATUS:</Text>
                                <Text style={[styles.box60, styles.text9, styles.borderbottom, { marginLeft: 3 }]}>{MasterData?.InspectionResult}</Text>
                            </View>
                        </View>
                    </View>

                    <View style={[styles.box100, styles.marginY10, { padding: 8 }]}>
                        <View style={[styles.flex, styles.box100, styles.paddingY3, styles.bgGrey]}>
                            <View style={[styles.flex, styles.justifycenter, styles.box16]}>
                                <Text style={[styles.text9, styles.bold, { textAlign: 'center' }]}>STYLE</Text>
                            </View>
                            <View style={[styles.flex, styles.justifycenter, styles.box16]}>
                                <Text style={[styles.text9, styles.bold, { textAlign: 'center' }]}>COLOR</Text>
                            </View>
                            <View style={[styles.flex, styles.justifycenter, styles.box16]}>
                                <Text style={[styles.text9, styles.bold, { textAlign: 'center' }]}>ORDER QTY</Text>
                            </View>
                            <View style={[styles.flex, styles.justifycenter, styles.box16]}>
                                <Text style={[styles.text9, styles.bold, { textAlign: 'center' }]}>OFFER QTY</Text>
                            </View>
                            <View style={[styles.flex, styles.justifycenter, styles.box16]}>
                                <Text style={[styles.text9, styles.bold, { textAlign: 'center' }]}>INSPECTED QTY</Text>
                            </View>
                            <View style={[styles.flex, styles.justifycenter, styles.box16]}>
                                <Text style={[styles.text9, styles.bold, { textAlign: 'center' }]}>BALANCE QTY</Text>
                            </View>
                        </View>

                        {
                            DetailData?.map((dtl, i) => (
                                <View style={[styles.flex, styles.box100]} key={i}>
                                    <View style={[styles.flex, styles.justifycenter, styles.box16, styles.borderright, styles.borderleft, styles.borderbottom, styles.paddingY3]}>
                                        <Text style={[styles.text9, { textAlign: 'center' }]}>{dtl?.StyleNo}</Text>
                                    </View>
                                    <View style={[styles.flex, styles.justifycenter, styles.box16, styles.borderright, styles.borderbottom, styles.paddingY3]}>
                                        <Text style={[styles.text9, { textAlign: 'center' }]}>{dtl?.Colorway}</Text>
                                    </View>
                                    <View style={[styles.flex, styles.justifycenter, styles.box16, styles.borderright, styles.borderbottom, styles.paddingY3]}>
                                        <Text style={[styles.text9, { textAlign: 'center' }]}>{dtl?.POQty}</Text>
                                    </View>
                                    <View style={[styles.flex, styles.justifycenter, styles.box16, styles.borderright, styles.borderbottom, styles.paddingY3]}>
                                        <Text style={[styles.text9, { textAlign: 'center' }]}>{dtl?.OfferQty}</Text>
                                    </View>
                                    <View style={[styles.flex, styles.justifycenter, styles.box16, styles.borderright, styles.borderbottom, styles.paddingY3]}>
                                        <Text style={[styles.text9, { textAlign: 'center' }]}>{dtl?.SampleSize}</Text>
                                    </View>
                                    <View style={[styles.flex, styles.justifycenter, styles.box16, styles.borderright, styles.borderbottom, styles.paddingY3]}>
                                        <Text style={[styles.text9, { textAlign: 'center' }]}>{(parseFloat(dtl?.POQty) - parseFloat(dtl?.OfferQty))}</Text>
                                    </View>
                                </View>
                            ))
                        }

                        <View style={[styles.flex, styles.box100]}>
                            <View style={[styles.flex, styles.justifycenter, styles.box16, styles.borderright, styles.borderleft, styles.borderbottom, styles.paddingY3]}>
                                <Text style={[styles.text9, { textAlign: 'center' }]} />
                            </View>
                            <View style={[styles.flex, styles.justifycenter, styles.box16, styles.borderright, styles.borderbottom, styles.paddingY3]}>
                                <Text style={[styles.text9, { textAlign: 'center' }]} />
                            </View>
                            <View style={[styles.flex, styles.justifycenter, styles.box16, styles.borderright, styles.borderbottom, styles.paddingY3]}>
                                <Text style={[styles.text9, styles.bold, { textAlign: 'center' }]}>{calculateSum(DetailData, 'POQty')}</Text>
                            </View>
                            <View style={[styles.flex, styles.justifycenter, styles.box16, styles.borderright, styles.borderbottom, styles.paddingY3]}>
                                <Text style={[styles.text9, styles.bold, { textAlign: 'center' }]}>{calculateSum(DetailData, 'OfferQty')}</Text>
                            </View>
                            <View style={[styles.flex, styles.justifycenter, styles.box16, styles.borderright, styles.borderbottom, styles.paddingY3]}>
                                <Text style={[styles.text9, styles.bold, { textAlign: 'center' }]}>{MasterData?.SampleSize}</Text>
                            </View>
                            <View style={[styles.flex, styles.justifycenter, styles.box16, styles.borderright, styles.borderbottom, styles.paddingY3]}>
                                <Text style={[styles.text9, styles.bold, { textAlign: 'center' }]}>{(calculateSum(DetailData, 'POQty') - calculateSum(DetailData, 'OfferQty'))}</Text>
                            </View>
                        </View>
                    </View>

                    <View style={[styles.box100, { padding: 8 }]}>
                        <View style={[styles.flex, styles.box100, styles.paddingY3, styles.aligncenter]}>
                            <View style={[styles.flex, styles.box15]}>
                                <Text style={[styles.text9, styles.bold,]}>REMARKS:</Text>
                            </View>
                            <View style={[styles.flex, styles.box85, styles.border, { padding: 3 }]}>
                                <Text style={[styles.text9]}>{MasterData?.Remarks}</Text>
                            </View>
                        </View>
                    </View>

                    <View style={[styles.box100, { padding: 8 }]}>
                        <View style={[styles.flex, styles.box100, styles.paddingY3, styles.aligncenter, styles.bgGrey]}>
                            <View style={[styles.flex, styles.box40, { paddingHorizontal: 3 }]}>
                                <Text style={[styles.text9, styles.bold,]}>ACCESSORIES CHECK LIST</Text>
                            </View>
                        </View>

                        <View style={[styles.flex, styles.box100, styles.flexwrap, styles.marginY5]}>
                            <View style={[styles.box33, styles.flex, styles.aligncenter, styles.marginY]}>
                                <Image style={[styles.box30, styles.checkbox2]} src={MasterData?.DyeLot === 'True' ? '/assets/images/checkbox-checked.png' : '/assets/images/checkbox-empty.png'} />
                                <Text style={[styles.box70, styles.text9, { paddingLeft: 4 }]}>DYE LOTS</Text>
                            </View>
                            <View style={[styles.box33, styles.flex, styles.aligncenter, styles.marginY]}>
                                <Image style={[styles.box30, styles.checkbox2]} src={MasterData?.Zipper === 'True' ? '/assets/images/checkbox-checked.png' : '/assets/images/checkbox-empty.png'} />
                                <Text style={[styles.box70, styles.text9, { paddingLeft: 4 }]}>ZIPPER</Text>
                            </View>
                            <View style={[styles.box33, styles.flex, styles.aligncenter, styles.marginY]}>
                                <Image style={[styles.box30, styles.checkbox2]} src={MasterData?.CartonDimen === 'True' ? '/assets/images/checkbox-checked.png' : '/assets/images/checkbox-empty.png'} />
                                <Text style={[styles.box70, styles.text9, { paddingLeft: 4 }]}>CARTON DIMEN</Text>
                            </View>
                            <View style={[styles.box33, styles.flex, styles.aligncenter, styles.marginY]}>
                                <Image style={[styles.box30, styles.checkbox2]} src={MasterData?.Pattern === 'True' ? '/assets/images/checkbox-checked.png' : '/assets/images/checkbox-empty.png'} />
                                <Text style={[styles.box70, styles.text9, { paddingLeft: 4 }]}>PATTERN</Text>
                            </View>
                            <View style={[styles.box33, styles.flex, styles.aligncenter, styles.marginY]}>
                                <Image style={[styles.box30, styles.checkbox2]} src={MasterData?.DrawingString === 'True' ? '/assets/images/checkbox-checked.png' : '/assets/images/checkbox-empty.png'} />
                                <Text style={[styles.box70, styles.text9, { paddingLeft: 4 }]}>DRAWSTRING</Text>
                            </View>
                            <View style={[styles.box33, styles.flex, styles.aligncenter, styles.marginY]}>
                                <Image style={[styles.box30, styles.checkbox2]} src={MasterData?.GrossWT === 'True' ? '/assets/images/checkbox-checked.png' : '/assets/images/checkbox-empty.png'} />
                                <Text style={[styles.box70, styles.text9, { paddingLeft: 4 }]}>GROSS WT</Text>
                            </View>
                            <View style={[styles.box33, styles.flex, styles.aligncenter, styles.marginY]}>
                                <Image style={[styles.box30, styles.checkbox2]} src={MasterData?.GeneralAppearance === 'True' ? '/assets/images/checkbox-checked.png' : '/assets/images/checkbox-empty.png'} />
                                <Text style={[styles.box70, styles.text9, { paddingLeft: 4 }]}>GENERAL APPEARANCE</Text>
                            </View>
                            <View style={[styles.box33, styles.flex, styles.aligncenter, styles.marginY]}>
                                <Image style={[styles.box30, styles.checkbox2]} src={MasterData?.HangTag === 'True' ? '/assets/images/checkbox-checked.png' : '/assets/images/checkbox-empty.png'} />
                                <Text style={[styles.box70, styles.text9, { paddingLeft: 4 }]}>HANGTAG</Text>
                            </View>
                            <View style={[styles.box33, styles.flex, styles.aligncenter, styles.marginY]}>
                                <Image style={[styles.box30, styles.checkbox2]} src={MasterData?.NetWT === 'True' ? '/assets/images/checkbox-checked.png' : '/assets/images/checkbox-empty.png'} />
                                <Text style={[styles.box70, styles.text9, { paddingLeft: 4 }]}>NET WT</Text>
                            </View>
                            <View style={[styles.box33, styles.flex, styles.aligncenter, styles.marginY]}>
                                <Image style={[styles.box30, styles.checkbox2]} src={MasterData?.MainLabel === 'True' ? '/assets/images/checkbox-checked.png' : '/assets/images/checkbox-empty.png'} />
                                <Text style={[styles.box70, styles.text9, { paddingLeft: 4 }]}>MAIN LABEL</Text>
                            </View>
                            <View style={[styles.box33, styles.flex, styles.aligncenter, styles.marginY]}>
                                <Image style={[styles.box30, styles.checkbox2]} src={MasterData?.PriceTicket === 'True' ? '/assets/images/checkbox-checked.png' : '/assets/images/checkbox-empty.png'} />
                                <Text style={[styles.box70, styles.text9, { paddingLeft: 4 }]}>PRICE TICKET</Text>
                            </View>
                            <View style={[styles.box33, styles.flex, styles.aligncenter, styles.marginY]}>
                                <Image style={[styles.box30, styles.checkbox2]} src={MasterData?.CartonThickness === 'True' ? '/assets/images/checkbox-checked.png' : '/assets/images/checkbox-empty.png'} />
                                <Text style={[styles.box70, styles.text9, { paddingLeft: 4 }]}>CARTON THICKNESS</Text>
                            </View>

                            <View style={[styles.box33, styles.flex, styles.aligncenter, styles.marginY]}>
                                <Image style={[styles.box30, styles.checkbox2]} src={MasterData?.MainLabelPlacement === 'True' ? '/assets/images/checkbox-checked.png' : '/assets/images/checkbox-empty.png'} />
                                <Text style={[styles.box70, styles.text9, { paddingLeft: 4 }]}>MAIN LABEL PLACEMENT</Text>
                            </View>
                            <View style={[styles.box33, styles.flex, styles.aligncenter, styles.marginY]}>
                                <Image style={[styles.box30, styles.checkbox2]} src={MasterData?.Hanger === 'True' ? '/assets/images/checkbox-checked.png' : '/assets/images/checkbox-empty.png'} />
                                <Text style={[styles.box70, styles.text9, { paddingLeft: 4 }]}>HANGER</Text>
                            </View>
                            <View style={[styles.box33, styles.flex, styles.aligncenter, styles.marginY]}>
                                <Image style={[styles.box30, styles.checkbox2]} src={MasterData?.CartonSticker === 'True' ? '/assets/images/checkbox-checked.png' : '/assets/images/checkbox-empty.png'} />
                                <Text style={[styles.box70, styles.text9, { paddingLeft: 4 }]}>CARTON STICKER</Text>
                            </View>
                            <View style={[styles.box33, styles.flex, styles.aligncenter, styles.marginY]}>
                                <Image style={[styles.box30, styles.checkbox2]} src={MasterData?.CareLabel === 'True' ? '/assets/images/checkbox-checked.png' : '/assets/images/checkbox-empty.png'} />
                                <Text style={[styles.box70, styles.text9, { paddingLeft: 4 }]}>CARE LABEL</Text>
                            </View>
                            <View style={[styles.box33, styles.flex, styles.aligncenter, styles.marginY]}>
                                <Image style={[styles.box30, styles.checkbox2]} src={MasterData?.HangerSticker === 'True' ? '/assets/images/checkbox-checked.png' : '/assets/images/checkbox-empty.png'} />
                                <Text style={[styles.box70, styles.text9, { paddingLeft: 4 }]}>HANGER STICKER/SIZER</Text>
                            </View>
                            <View style={[styles.box33, styles.flex, styles.aligncenter, styles.marginY]}>
                                <Image style={[styles.box30, styles.checkbox2]} src={MasterData?.UPC === 'True' ? '/assets/images/checkbox-checked.png' : '/assets/images/checkbox-empty.png'} />
                                <Text style={[styles.box70, styles.text9, { paddingLeft: 4 }]}>U.P.C</Text>
                            </View>
                            <View style={[styles.box33, styles.flex, styles.aligncenter, styles.marginY]}>
                                <Image style={[styles.box30, styles.checkbox2]} src={MasterData?.ContentLabelPlacement === 'True' ? '/assets/images/checkbox-checked.png' : '/assets/images/checkbox-empty.png'} />
                                <Text style={[styles.box70, styles.text9, { paddingLeft: 4 }]}>CARE LABEL PLACEMENT</Text>
                            </View>
                            <View style={[styles.box33, styles.flex, styles.aligncenter, styles.marginY]}>
                                <Image style={[styles.box30, styles.checkbox2]} src={MasterData?.NoOfPcsInnerPack === 'True' ? '/assets/images/checkbox-checked.png' : '/assets/images/checkbox-empty.png'} />
                                <Text style={[styles.box70, styles.text9, { paddingLeft: 4 }]}>NO. OF PCS/INNER PACK</Text>
                            </View>
                            <View style={[styles.box33, styles.flex, styles.aligncenter, styles.marginY]}>
                                <Image style={[styles.box30, styles.checkbox2]} src={MasterData?.ContentLabel === 'True' ? '/assets/images/checkbox-checked.png' : '/assets/images/checkbox-empty.png'} />
                                <Text style={[styles.box70, styles.text9, { paddingLeft: 4 }]}>CONTENT LABEL</Text>
                            </View>
                            <View style={[styles.box33, styles.flex, styles.aligncenter, styles.marginY]}>
                                <Image style={[styles.box30, styles.checkbox2]} src={MasterData?.NoOfPcsCarton === 'True' ? '/assets/images/checkbox-checked.png' : '/assets/images/checkbox-empty.png'} />
                                <Text style={[styles.box70, styles.text9, { paddingLeft: 4 }]}>NO. OF PCS/CARTON</Text>
                            </View>
                            <View style={[styles.box33, styles.flex, styles.aligncenter, styles.marginY]}>
                                <Image style={[styles.box30, styles.checkbox2]} src={MasterData?.ContentLabelPlacement === 'True' ? '/assets/images/checkbox-checked.png' : '/assets/images/checkbox-empty.png'} />
                                <Text style={[styles.box70, styles.text9, { paddingLeft: 4 }]}>CONTENT LABEL PLACEMENT</Text>
                            </View>
                            <View style={[styles.box33, styles.flex, styles.aligncenter, styles.marginY]}>
                                <Image style={[styles.box30, styles.checkbox2]} src={MasterData?.FoldMethod === 'True' ? '/assets/images/checkbox-checked.png' : '/assets/images/checkbox-empty.png'} />
                                <Text style={[styles.box70, styles.text9, { paddingLeft: 4 }]}>FOLD METHOD</Text>
                            </View>

                            <View style={[styles.box33, styles.flex, styles.aligncenter, styles.marginY]}>
                                <Image style={[styles.box30, styles.checkbox2]} src={MasterData?.Button === 'True' ? '/assets/images/checkbox-checked.png' : '/assets/images/checkbox-empty.png'} />
                                <Text style={[styles.box70, styles.text9, { paddingLeft: 4 }]}>BUTTONS</Text>
                            </View>
                            <View style={[styles.box33, styles.flex, styles.aligncenter, styles.marginY]}>
                                <Image style={[styles.box30, styles.checkbox2]} src={MasterData?.PolyBag === 'True' ? '/assets/images/checkbox-checked.png' : '/assets/images/checkbox-empty.png'} />
                                <Text style={[styles.box70, styles.text9, { paddingLeft: 4 }]}>POLYBAG/BLISTER BAG</Text>
                            </View>
                            <View style={[styles.box33, styles.flex, styles.aligncenter, styles.marginY]}>
                                <Image style={[styles.box30, styles.checkbox2]} src={MasterData?.Interlining === 'True' ? '/assets/images/checkbox-checked.png' : '/assets/images/checkbox-empty.png'} />
                                <Text style={[styles.box70, styles.text9, { paddingLeft: 4 }]}>INTERLINING</Text>
                            </View>
                            <View style={[styles.box33, styles.flex, styles.aligncenter, styles.marginY]}>
                                <Image style={[styles.box30, styles.checkbox2]} src={MasterData?.CartonMarking === 'True' ? '/assets/images/checkbox-checked.png' : '/assets/images/checkbox-empty.png'} />
                                <Text style={[styles.box70, styles.text9, { paddingLeft: 4 }]}>CARTON MARKING</Text>
                            </View>
                        </View>
                    </View>

                    <View style={[styles.box100, styles.marginY5, { padding: 8 }]}>
                        <View style={[styles.flex, styles.box100, styles.paddingY3, styles.bgGrey]}>
                            <View style={[styles.flex, styles.justifycenter, styles.box5]}>
                                <Text style={[styles.text9, styles.bold, { textAlign: 'center' }]}>S.NO.</Text>
                            </View>
                            <View style={[styles.flex, styles.justifycenter, styles.box65]}>
                                <Text style={[styles.text9, styles.bold, { textAlign: 'center' }]}>DURING INSPECTION FOUND FOLLOWING DISCREPANCIES</Text>
                            </View>
                            <View style={[styles.flex, styles.justifycenter, styles.box10]}>
                                <Text style={[styles.text9, styles.bold, { textAlign: 'center' }]}>CRITICAL</Text>
                            </View>
                            <View style={[styles.flex, styles.justifycenter, styles.box10]}>
                                <Text style={[styles.text9, styles.bold, { textAlign: 'center' }]}>MAJOR</Text>
                            </View>
                            <View style={[styles.flex, styles.justifycenter, styles.box10]}>
                                <Text style={[styles.text9, styles.bold, { textAlign: 'center' }]}>MINOR</Text>
                            </View>
                        </View>

                        {
                            DefectsData?.map((defect, i) => (
                                <View style={[styles.flex, styles.box100]} key={i}>
                                    <View style={[styles.flex, styles.justifycenter, styles.box5, styles.borderright, styles.borderleft, styles.borderbottom, styles.paddingY3]}>
                                        <Text style={[styles.text9, { textAlign: 'center' }]}>{i + 1}</Text>
                                    </View>
                                    <View style={[styles.flex, styles.box65, styles.borderright, styles.borderbottom, styles.paddingY3]}>
                                        <Text style={[styles.text9, { paddingHorizontal: 3 }]}>{defect?.Discrepanices}</Text>
                                    </View>
                                    <View style={[styles.flex, styles.justifycenter, styles.box10, styles.borderright, styles.borderbottom, styles.paddingY3]}>
                                        <Text style={[styles.text9, { textAlign: 'center' }]}>{defect?.Critical}</Text>
                                    </View>
                                    <View style={[styles.flex, styles.justifycenter, styles.box10, styles.borderright, styles.borderbottom, styles.paddingY3]}>
                                        <Text style={[styles.text9, { textAlign: 'center' }]}>{defect?.Major}</Text>
                                    </View>
                                    <View style={[styles.flex, styles.justifycenter, styles.box10, styles.borderright, styles.borderbottom, styles.paddingY3]}>
                                        <Text style={[styles.text9, { textAlign: 'center' }]}>{defect?.Minor}</Text>
                                    </View>
                                </View>
                            ))
                        }

                        <View style={[styles.flex, styles.box100]}>
                            <View style={[styles.flex, styles.justifycenter, styles.box70, styles.borderright, styles.borderleft, styles.borderbottom, styles.paddingY3]}>
                                <Text style={[styles.text9, styles.bold, { textAlign: 'center' }]}>Total</Text>
                            </View>
                            <View style={[styles.flex, styles.justifycenter, styles.box10, styles.borderright, styles.borderbottom, styles.paddingY3]}>
                                <Text style={[styles.text9, styles.bold, { textAlign: 'center' }]}>{calculateSum(DefectsData, 'Critical')}</Text>
                            </View>
                            <View style={[styles.flex, styles.justifycenter, styles.box10, styles.borderright, styles.borderbottom, styles.paddingY3]}>
                                <Text style={[styles.text9, styles.bold, { textAlign: 'center' }]}>{calculateSum(DefectsData, 'Major')}</Text>
                            </View>
                            <View style={[styles.flex, styles.justifycenter, styles.box10, styles.borderright, styles.borderbottom, styles.paddingY3]}>
                                <Text style={[styles.text9, styles.bold, { textAlign: 'center' }]}>{calculateSum(DefectsData, 'Minor')}</Text>
                            </View>
                        </View>
                    </View>

                    <View style={[styles.box100, { padding: 8 }]}>
                        <View style={[styles.flex, styles.box100, styles.paddingY3, styles.aligncenter, styles.bgGrey]}>
                            <View style={[styles.flex, styles.box40, { paddingHorizontal: 3 }]}>
                                <Text style={[styles.text9, styles.bold,]}>TOTAL ALLOWED</Text>
                            </View>
                        </View>

                        <View style={[styles.flex, styles.box100, styles.flexwrap, styles.marginY5, { paddingHorizontal: 3 }]}>
                            <Text style={[styles.text9, styles.bold, styles.box20]}>ALLOWED MAJOR</Text>
                            <Text style={[styles.text9, styles.box20]}>{MasterData?.MaxAllowMajor}</Text>
                        </View>
                        <View style={[styles.flex, styles.box100, styles.flexwrap, { paddingHorizontal: 3 }]}>
                            <Text style={[styles.text9, styles.bold, styles.box20]}>ALLOWED MINOR</Text>
                            <Text style={[styles.text9, styles.box20]}>{MasterData?.MaxAllowMinor}</Text>
                        </View>
                    </View>
                </Page>

                {/* Page 7 */}

                <Page style={styles.body} orientation='portrait'>
                    <View style={[styles.flexbox, styles.box100, styles.justifycenter]}>
                        <Text style={[styles.text14, styles.bold, styles.underline, { textAlign: 'center' }]}>AQL ATTACHMENT</Text>
                    </View>

                    <View style={[styles.box100, styles.marginY5, { padding: 8 }]}>
                        <Image style={[{ maxHeight: '560' }]} src='/assets/images/AQL-chart.png' />
                    </View>
                </Page>

                {/* Page 11 */}

                <Page style={styles.body} orientation='portrait'>

                <View style={[styles.flexbox, styles.box100, styles.justifycenter]}>
                        <Text style={[styles.text14, styles.bold, styles.underline, { textAlign: 'center' }]}>SPECS IMAGES LIST</Text>
                    </View>

                    <View style={[styles.box100, styles.flex, styles.flexwrap, { padding: 8, justifyContent: 'space-between' }]}>

                        {
                            MiscellaneousImages.map((x, i) => (
                                <View style={[styles.box48, styles.flex, styles.flexwrap, styles.marginY5]} key={i}>
                                    <View style={[styles.box100, styles.padding2, { height: '200px' }]} >
                                        <Image style={{ width: '100%', height: '100%', objectFit: 'contain' }} src={x?.FilePath || '/assets/images/no-image.jpg'} />
                                    </View>
                                </View>
                            ))
                        }
                    </View>
                </Page>

            </Document>
        </PDFViewer>
    </>
);

InspectionReportPDF.propTypes = {
    MasterData: PropTypes.any,
    DefectsData: PropTypes.any,
    DetailData: PropTypes.any,
    MiscellaneousImages: PropTypes.any,
    QAData: PropTypes.any,
    CurrentData: PropTypes.any,
};

Font.register({
    family: 'Roboto',
    src: '/fonts/Roboto-Regular.ttf'
});

Font.register({
    family: 'Roboto-Bold',
    src: '/fonts/Roboto-Bold.ttf'
});


