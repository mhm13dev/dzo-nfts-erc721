// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.18;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract DZO is ERC721URIStorage, Ownable {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    constructor() ERC721("Dzogchen Study Centre", "DZO") {}

    /** MINTING **/
    function mint(
        address _owner,
        string memory _tokenURI
    ) public onlyOwner returns (uint256) {
        uint256 newItemId = _tokenIds.current();
        _safeMint(_owner, newItemId);
        _setTokenURI(newItemId, _tokenURI);

        _tokenIds.increment();
        return newItemId;
    }
}
