"use client"
import React from 'react';
import { Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout
import LayoutHeader from "@/component/layout/Header"
// import LaySider from "@/component/layout/Sider"
import LayFooter from "@/component/layout/Footer"


export default function CommonLayout({ children }: { children: React.ReactNode }) {
    const layoutStyle = {
        overflow: 'hidden',
        width: '100%',
        height: "100vh"
    };
    const headerStyle: React.CSSProperties = {
        textAlign: 'center',
        height: 64,
        backgroundColor: '#F9F9F9',
    };

    const siderStyle: React.CSSProperties = {
        textAlign: 'center',
        lineHeight: '120px',
        color: '#fff',
        backgroundColor: '#fff',
    };

    const footerStyle: React.CSSProperties = {
        textAlign: 'center',
        color: '#000',
        backgroundColor: '#fff',
        height: '0px',
        padding: '0px'
    };

    return (
        <Layout style={layoutStyle}>
            <Sider width="25%" style={siderStyle}>
                {/*<LaySider></LaySider>*/}
            </Sider>
            <Layout>
                <Header style={headerStyle}>
                    <LayoutHeader></LayoutHeader>
                </Header>
                <Content className="scrollbar-hidden" style={{overflow: "auto"}}>
                    {children}
                </Content>
                <Footer style={footerStyle}>
                    <LayFooter></LayFooter>
                </Footer>
            </Layout>
        </Layout>
    )
}
