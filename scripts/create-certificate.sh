source scriptsUtils.sh
export PATH=${PWD}/../bin:$PATH

certificatesForAdminstrator() {
    echo
    echo "Enroll the CA admin"
    echo
    mkdir -p consortium/crypto-config/peerOrganizations/adminstrator/
    export FABRIC_CA_CLIENT_HOME=${PWD}/consortium/crypto-config/peerOrganizations/adminstrator/

    # TO go back to the previous folder
    #echo "${PWD%/[^/]*}"

    fabric-ca-client enroll -u https://admin:adminpw@localhost:1010 --caname ca.adminstrator --tls.certificates ${PWD}/consortium/fabric-ca/adminstrator/tls-cert.pem

    echo 'NodeOUs:
    Enable: true 
    ClientOUIdentifier:
        Certificate: cacerts/localhost-1010-ca-adminstrator.pem
        OrganizationalUnitIdentifier: client
    PeerOUIdentifier:
        Certificate: cacerts/localhost-1010-ca-adminstrator.pem
        OrganizationalUnitIdentifier: peer
    AdminOUIdentifier:
        Certificate: cacerts/localhost-1010-ca-adminstrator.pem
        OrganizationalUnitIdentifier: admin
    OrdererOUIdentifier:
        Certificate: cacerts/localhost-1010-ca-adminstrator.pem
        OrganizationalUnitIdentifier: orderer' >${PWD}/consortium/crypto-config/peerOrganizations/adminstrator/msb/config.yaml

    echo
    echo "Register peer0"
    echo
    fabric-ca-client register --caname ca.adminstrator --id.name peer0 --id.secret peer0pw --id.type peer --tls.certfiles ${PWD}/consortium/fabric-ca/adminstrator/tls-cert.pem

    echo
    echo "Register peer1"
    echo
    fabric-ca-client register --caname ca.adminstrator --id.name peer1 --id.secret peer1pw --id.type peer --tls.certfiles ${PWD}/consortium/fabric-ca/adminstrator/tls-cert.pem

    echo
    echo "Register user"
    echo
    fabric-ca-client register --caname ca.adminstrator --id.name user1 --id.secret user1pw --id.type client --tls.certfiles ${PWD}/consortium/fabric-ca/adminstrator/tls-cert.pem

    echo
    echo "Register the org admin"
    echo
    fabric-ca-client register --caname ca.adminstrator --id.name Smacadmin --id.secret Smacadminpw --id.type admin --tls.certfiles ${PWD}/consortium/fabric-ca/adminstrator/tls-cert.pem

    mkdir -p consortium/crypto-config/peerOrganizations/adminstrator/peers

    mkdir -p consortium/crypto-config/peerOrganizations/adminstrator/peers/peer0.adminstrator

    echo
    echo "## Generate the peer0 msp"
    echo
    fabric-ca-client enroll -u https://peer0:peer0pw@localhost:1010 --caname ca.adminstrator -M ${PWD}/consortium/crypto-config/peerOrganizations/adminstrator/peers/peer0.adminstrator/msp --csr.hosts peer0.adminstrator
}